import { PartialType } from '@nestjs/mapped-types';
import { CreateImageCertificatDto } from './create-image-certificat.dto';

export class UpdateImageCertificatDto extends PartialType(CreateImageCertificatDto) {}
