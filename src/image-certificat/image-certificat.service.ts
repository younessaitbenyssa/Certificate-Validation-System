import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateImageCertificatDto } from './dto/create-image-certificat.dto';
import { UpdateImageCertificatDto } from './dto/update-image-certificat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ImageCertificat } from './entities/image-certificat.entity';
import { Repository } from 'typeorm';
import * as fs from 'fs';
import { join } from 'path';
import { Response } from 'express';

@Injectable()
export class ImageCertificatService {

  @InjectRepository(ImageCertificat) private readonly certificatImageRepository:Repository<ImageCertificat>

  async create(createImageCertificatDto: CreateImageCertificatDto):Promise<ImageCertificat> {
    const savedImage = await this.certificatImageRepository.save(createImageCertificatDto);
    return savedImage;
  }


  async findOne(certificatId: string,res:Response):Promise<void> {
    const image = await this.certificatImageRepository.findOne({
      where:{certificat: {id:certificatId}},
    })
    if (!image) {
      throw new NotFoundException('Image not found');
    }

    const pdfPath = image.Url;

    const absolutePath = join(process.cwd(), pdfPath);

    if (!fs.existsSync(absolutePath)) {
      throw new NotFoundException('PDF file not found');
    }
    res.send(absolutePath);

   
  }

  

  remove(id: number) {
    return `This action removes a #${id} imageCertificat`;
  }
}
