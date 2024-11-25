import { IsEmail, IsEmpty, IsNotEmpty, IsPhoneNumber } from "class-validator";

export class CreatePorteurDto {
    id : number;
    @IsNotEmpty()
    nom_complet: string;
    @IsEmail()
    email: string;
    @IsPhoneNumber()
    telephone: string;
}
