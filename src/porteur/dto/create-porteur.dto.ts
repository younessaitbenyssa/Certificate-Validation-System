import { IsNotEmpty, IsPhoneNumber } from "class-validator";

export class CreatePorteurDto {

    CIN:number

    @IsNotEmpty()
    name: string;

    @IsPhoneNumber()
    telephone: string;
}
