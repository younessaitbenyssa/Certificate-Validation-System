import { Injectable } from '@nestjs/common';
import { CreateCodeQrDto } from './dto/create-code-qr.dto';
import { UpdateCodeQrDto } from './dto/update-code-qr.dto';

@Injectable()
export class CodeQrService {
  create(createCodeQrDto: CreateCodeQrDto) {
    return 'This action adds a new codeQr';
  }

  findAll() {
    return `This action returns all codeQr`;
  }

  findOne(id: number) {
    return `This action returns a #${id} codeQr`;
  }

  update(id: number, updateCodeQrDto: UpdateCodeQrDto) {
    return `This action updates a #${id} codeQr`;
  }

  remove(id: number) {
    return `This action removes a #${id} codeQr`;
  }
}
