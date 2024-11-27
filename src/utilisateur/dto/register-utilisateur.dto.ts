import { UtilisateurRole } from "src/enums/utilisateur-role.enum";

export class RegisterDto{
    name : string;
    adresse : string;
    email: string;
    telephone: string;
    role:UtilisateurRole
}