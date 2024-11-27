import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

export class CreateInstitutionDto {

    @IsNotEmpty()
    @IsString()
    adresse : string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsPhoneNumber()
    telephone: string;

}
