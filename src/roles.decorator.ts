import { SetMetadata } from '@nestjs/common';
import { UtilisateurRole } from './enums/utilisateur-role.enum';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: UtilisateurRole[]) => SetMetadata(ROLES_KEY, roles);