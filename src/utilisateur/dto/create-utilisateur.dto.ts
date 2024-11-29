import { IsEmail, IsEnum, IsNotEmpty, IsStrongPassword } from "class-validator";
import { UtilisateurRole } from "src/enums/utilisateur-role.enum";

export class CreateUtilisateurDto {
    
    @IsNotEmpty()
    @IsEmail()
    email:string;
    @IsNotEmpty()
    @IsStrongPassword()
    password:string;
    @IsEnum(UtilisateurRole)
    role:UtilisateurRole
}
