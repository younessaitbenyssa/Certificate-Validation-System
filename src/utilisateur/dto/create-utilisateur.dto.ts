import { IsEmail, IsEnum, IsNotEmpty } from "class-validator";
import { UtilisateurRole } from "src/enums/utilisateur-role.enum";

export class CreateUtilisateurDto {
    
    @IsEmail()
    email:string;
    
    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    @IsEnum(UtilisateurRole)
    role:UtilisateurRole
}
