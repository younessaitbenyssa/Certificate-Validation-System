import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsPhoneNumber } from "class-validator";
import { CreateUtilisateurDto } from "src/utilisateur/dto/create-utilisateur.dto";

export class CreatePorteurDto {
    id : number;

    @IsNotEmpty()
    nom_complet: string;

    @IsPhoneNumber()
    telephone: string;
}
