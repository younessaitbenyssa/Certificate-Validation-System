import { UtilisateurRole } from "src/enums/utilisateur-role.enum";

export class RegisterDto{
    name : string;
    CIN:string;
    institutionId:number;
    adresse : string;
    email: string;
    telephone: string;
    password:string;
    role:UtilisateurRole
}