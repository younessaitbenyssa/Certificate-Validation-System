import { JwtService } from '@nestjs/jwt';
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService:JwtService,
    private readonly configService: ConfigService,
  ){}
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if (!token) {
            throw new UnauthorizedException();
        }
        try {
            const payload = await this.jwtService.verifyAsync(
              token,
              {
                secret: process.env.JWT_SECRET
              }
            );
            request['user'] = payload;
          } catch (error){
            console.error("Error verifying token:", error.message);
            throw new UnauthorizedException();
          }
          return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const authorization = request.headers['authorization'];
    if (typeof authorization === 'string') {
        const [type, token] = authorization.split(' ');
        return type === 'Bearer' ? token : undefined;
    }
    return undefined;
}

}
