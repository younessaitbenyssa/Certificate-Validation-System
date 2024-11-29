import { IsEmail, IsEnum, IsNotEmpty, IsOptional } from "class-validator";
import { UtilisateurRole } from "src/enums/utilisateur-role.enum";

export class CreateUtilisateurDto {
    
    @IsNotEmpty()
    @IsEmail()
    email:string;
    
    @IsNotEmpty()
    password:string;

    @IsOptional()
    @IsEnum(UtilisateurRole)
    role?:UtilisateurRole
}
