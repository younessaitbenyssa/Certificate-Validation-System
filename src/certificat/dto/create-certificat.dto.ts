import { Type } from "class-transformer";
import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateCertificatDto {

    @IsString()
    nom:string;

    @IsDate()
    @Type(() => Date)
    dateEmission:Date;

    @IsString()
    CIN: string

    @IsNumber()
    institutionId: number


}
