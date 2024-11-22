import { Module } from '@nestjs/common';
import { ImageCertificatService } from './image-certificat.service';
import { ImageCertificatController } from './image-certificat.controller';

@Module({
  controllers: [ImageCertificatController],
  providers: [ImageCertificatService],
})
export class ImageCertificatModule {}
