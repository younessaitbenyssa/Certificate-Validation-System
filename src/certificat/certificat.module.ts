import { Module } from '@nestjs/common';
import { CertificatService } from './certificat.service';
import { CertificatController } from './certificat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Certificat } from './entities/certificat.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Certificat])],
  controllers: [CertificatController],
  providers: [CertificatService],
})
export class CertificatModule {}
