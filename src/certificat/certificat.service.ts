import { Injectable } from '@nestjs/common';
import { CreateCertificatDto } from './dto/create-certificat.dto';
import { UpdateCertificatDto } from './dto/update-certificat.dto';

@Injectable()
export class CertificatService {
  create(createCertificatDto: CreateCertificatDto) {
    return 'This action adds a new certificat';
  }

  findAll() {
    return `This action returns all certificat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} certificat`;
  }

  update(id: number, updateCertificatDto: UpdateCertificatDto) {
    return `This action updates a #${id} certificat`;
  }

  remove(id: number) {
    return `This action removes a #${id} certificat`;
  }
}
