import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import type { SignOptions } from 'jsonwebtoken';
import { UnauthorizedError } from '../common/errors';
import { PrismaService } from '../prisma/prisma.service';
import type { LoginDto } from './dto/login.dto';
import type { RefreshTokenDto } from './dto/refresh-token.dto';
import { RefreshTokenBlacklistService } from './refresh-token-blacklist.service';
import type { JwtAccessPayload } from './types/jwt-access-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly refreshTokenBlacklist: RefreshTokenBlacklistService,
  ) {}

  validateAccessToken(token: string): JwtAccessPayload {
    try {
      return this.jwtService.verify<JwtAccessPayload>(token);
    } catch {
      throw new UnauthorizedError('Invalid or expired access token');
    }
  }

  async login(
    dto: LoginDto,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    const user = await this.prisma.user.findUnique({
      where: { login: dto.login },
    });

    // Same error for unknown login and wrong password: do not leak which one exists.
    if (!user || !(await bcrypt.compare(dto.password, user.password))) {
      throw new UnauthorizedError('Authentication failed');
    }

    const payload: JwtAccessPayload = { userId: user.id, login: user.login };
    return this.issueTokenPair(payload);
  }

  async refresh(
    dto: RefreshTokenDto,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    if (!dto.refreshToken) {
      throw new UnauthorizedError('Invalid or missing token');
    }

    const decoded = this.verifyRefreshToken(dto.refreshToken);

    if (this.refreshTokenBlacklist.isRevoked(dto.refreshToken)) {
      throw new UnauthorizedError('Refresh token is invalid or expired');
    }

    const user = await this.prisma.user.findUnique({
      where: { id: decoded.userId },
    });
    if (!user) {
      throw new UnauthorizedError('Refresh token is invalid or expired');
    }

    // Rotate on every refresh: the token just used can't be replayed again.
    this.refreshTokenBlacklist.revoke(dto.refreshToken);

    const payload: JwtAccessPayload = { userId: user.id, login: user.login };
    return this.issueTokenPair(payload);
  }

  logout(dto: RefreshTokenDto): { message: string } {
    if (!dto.refreshToken) {
      throw new UnauthorizedError('Invalid or missing token');
    }

    this.verifyRefreshToken(dto.refreshToken);

    this.refreshTokenBlacklist.revoke(dto.refreshToken);
    return { message: 'Logged out successfully' };
  }

  private verifyRefreshToken(token: string): JwtAccessPayload {
    try {
      return this.jwtService.verify<JwtAccessPayload>(token, {
        secret: this.configService.get<string>('JWT_SECRET_REFRESH_KEY'),
      });
    } catch {
      throw new UnauthorizedError('Refresh token is invalid or expired');
    }
  }

  private issueTokenPair(payload: JwtAccessPayload): {
    accessToken: string;
    refreshToken: string;
  } {
    const accessToken = this.jwtService.sign(payload);

    const refreshTtl = (this.configService.get<string>(
      'TOKEN_REFRESH_EXPIRE_TIME',
    ) ?? '7d') as NonNullable<SignOptions['expiresIn']>;
    const refreshToken = this.jwtService.sign(payload, {
      secret: this.configService.get<string>('JWT_SECRET_REFRESH_KEY'),
      expiresIn: refreshTtl,
    });

    return { accessToken, refreshToken };
  }
}
