import {IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

export class CreateInstitutionDto {

    @IsNotEmpty()
    @IsString()
    name : string;

    @IsNotEmpty()
    @IsString()
    adresse : string;

    @IsPhoneNumber()
    telephone: string;

}
