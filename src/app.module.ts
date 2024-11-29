import { Module } from '@nestjs/common';
import { CertificatModule } from './certificat/certificat.module';
import { CodeQrModule } from './code-qr/code-qr.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Certificat } from './certificat/entities/certificat.entity';
import { CodeQr } from './code-qr/entities/code-qr.entity';
import { ImageCertificat } from './image-certificat/entities/image-certificat.entity';
import { Porteur } from './porteur/entities/porteur.entity';
import { Institution } from './institution/entities/institution.entity';
import { ImageCertificatModule } from './image-certificat/image-certificat.module';
import { PorteurModule } from './porteur/porteur.module';
import { InstitutionModule } from './institution/institution.module';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { Utilisateur } from './utilisateur/entities/utilisateur.entity';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './roles/roles.guard';

@Module({

  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'',
      database:'certificat_validation',
      entities:[Certificat,CodeQr, ImageCertificat, Porteur, Institution, Utilisateur],
      synchronize:true,
      dropSchema:false
    })
    ,CertificatModule, CodeQrModule, ImageCertificatModule, PorteurModule, InstitutionModule, UtilisateurModule],
    providers: [
      {
        provide: APP_GUARD,
        useClass: RolesGuard,
      },
    ]
})
export class AppModule {}
