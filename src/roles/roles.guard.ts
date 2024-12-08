import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UtilisateurRole } from 'src/enums/utilisateur-role.enum';
import { ROLES_KEY } from 'src/roles.decorator';



@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<UtilisateurRole[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    
    if (!user || !user.roles) {
        console.error('User or roles property is undefined');
        return false;
    }

    return requiredRoles.some((role) => user.roles.includes(role));
  }
}
