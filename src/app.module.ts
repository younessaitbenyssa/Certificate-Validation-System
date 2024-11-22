import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InstitutionModule } from './institution/institution.module';
import { PorteurModule } from './porteur/porteur.module';
import { CodeQrModule } from './code-qr/code-qr.module';
import { ImageCertificatModule } from './image-certificat/image-certificat.module';

@Module({
  imports: [InstitutionModule, PorteurModule, CodeQrModule, ImageCertificatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
