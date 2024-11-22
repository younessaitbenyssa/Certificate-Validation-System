import { Module } from '@nestjs/common';
import { CertificatModule } from './certificat/certificat.module';
import { CodeQrModule } from './code-qr/code-qr.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Certificat } from './certificat/entities/certificat.entity';
import { CodeQr } from './code-qr/entities/code-qr.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'',
      database:'certificat_validation',
      entities:[Certificat,CodeQr],
      synchronize:true,
      dropSchema:false
      
    })
    ,CertificatModule, CodeQrModule]
})
export class AppModule {}
