import { IsEmail, IsEnum, IsNotEmpty } from "class-validator";
import { UtilisateurRole } from "src/enums/utilisateur-role.enum";

export class CreateUtilisateurDto {
    
    @IsNotEmpty()
    @IsEmail()
    email:string;
    @IsNotEmpty()
    password:string;
    @IsEnum(UtilisateurRole)
    role:UtilisateurRole
}
