import { IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

export class CreatePorteurDto {

    @IsString()
    CIN:string;

    @IsNotEmpty()
    name: string;

    @IsPhoneNumber()
    telephone: string;
}
