import { PartialType } from '@nestjs/mapped-types';
import { CreateCodeQrDto } from './create-code-qr.dto';

export class UpdateCodeQrDto extends PartialType(CreateCodeQrDto) {}
