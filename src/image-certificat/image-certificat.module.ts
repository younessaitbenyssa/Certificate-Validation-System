import { Module } from '@nestjs/common';
import { ImageCertificatService } from './image-certificat.service';
import { ImageCertificatController } from './image-certificat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageCertificat } from './entities/image-certificat.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ImageCertificat])],
  controllers: [ImageCertificatController],
  providers: [ImageCertificatService],
  exports:[ImageCertificatService]
})
export class ImageCertificatModule {}
