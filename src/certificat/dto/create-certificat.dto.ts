import { Type } from "class-transformer";
import { IsDate, IsNumber } from "class-validator";

export class CreateCertificatDto {


    @IsDate()
    @Type(() => Date)
    dateEmission:Date;

    @IsNumber()
    porteurId: number

    @IsNumber()
    institutionId: number


}
