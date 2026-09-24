import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import type { SignOptions } from 'jsonwebtoken';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { RefreshTokenBlacklistService } from './refresh-token-blacklist.service';

@Module({
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET_KEY'),
        signOptions: {
          expiresIn: (config.get<string>('TOKEN_EXPIRE_TIME') ??
            '15m') as NonNullable<SignOptions['expiresIn']>,
          algorithm: 'HS256' as const,
        },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, RefreshTokenBlacklistService],
  exports: [AuthService],
})
export class AuthModule {}
