import { PartialType } from '@nestjs/mapped-types';
import { CreateCertificatDto } from './create-certificat.dto';

export class UpdateCertificatDto extends PartialType(CreateCertificatDto) {}
