import { Injectable } from '@nestjs/common';
import { CreateImageCertificatDto } from './dto/create-image-certificat.dto';
import { UpdateImageCertificatDto } from './dto/update-image-certificat.dto';

@Injectable()
export class ImageCertificatService {
  create(createImageCertificatDto: CreateImageCertificatDto) {
    return 'This action adds a new imageCertificat';
  }

  findAll() {
    return `This action returns all imageCertificat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} imageCertificat`;
  }

  update(id: number, updateImageCertificatDto: UpdateImageCertificatDto) {
    return `This action updates a #${id} imageCertificat`;
  }

  remove(id: number) {
    return `This action removes a #${id} imageCertificat`;
  }
}
