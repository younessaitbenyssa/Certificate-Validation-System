import { PartialType } from '@nestjs/mapped-types';
import { CreatePorteurDto } from './create-porteur.dto';

export class UpdatePorteurDto extends PartialType(CreatePorteurDto) {}
