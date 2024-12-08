import { Module } from '@nestjs/common';
import { CertificatService } from './certificat.service';
import { CertificatController } from './certificat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Certificat } from './entities/certificat.entity';
import { PorteurService } from 'src/porteur/porteur.service';
import { InstitutionService } from 'src/institution/institution.service';
import { Porteur } from 'src/porteur/entities/porteur.entity';
import { Institution } from 'src/institution/entities/institution.entity';



@Module({
  imports:[TypeOrmModule.forFeature([Certificat,Porteur,Institution])],
  controllers: [CertificatController],
  providers: [CertificatService, PorteurService, InstitutionService],
})
export class CertificatModule {}
