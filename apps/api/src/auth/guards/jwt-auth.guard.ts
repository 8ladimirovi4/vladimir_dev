import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import type { Request } from 'express';
import { IS_PUBLIC_KEY } from '../../common/decorators/public.decorator';
import { UnauthorizedError } from '../../common/errors';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly reflector: Reflector,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest<Request>();
    if (this.isSwaggerPath(request.path)) {
      return true;
    }

    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedError('No token provided');
    }

    request['user'] = this.authService.validateAccessToken(token);
    return true;
  }

  // Exact paths on purpose: a `startsWith('/doc')` prefix would also match
  // `/documents` and leave the whole corpus CRUD unauthenticated.
  private isSwaggerPath(path: string): boolean {
    return (
      path === '/doc' ||
      path === '/doc-json' ||
      path === '/doc-yaml' ||
      path.startsWith('/doc/')
    );
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
