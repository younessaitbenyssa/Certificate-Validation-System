import { Module } from '@nestjs/common';
import { CertificatModule } from './certificat/certificat.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Certificat } from './certificat/entities/certificat.entity';
import { Porteur } from './porteur/entities/porteur.entity';
import { Institution } from './institution/entities/institution.entity';
import { PorteurModule } from './porteur/porteur.module';
import { InstitutionModule } from './institution/institution.module';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { Utilisateur } from './utilisateur/entities/utilisateur.entity';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from './config/config';
import { JwtModule } from '@nestjs/jwt';


@Module({

  /*  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },],  */

  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'',
      database:'certificat_validation',
      entities:[Certificat, Porteur, Institution,Utilisateur],
      synchronize:true,
      dropSchema:false
    })
    ,CertificatModule, PorteurModule, InstitutionModule, UtilisateurModule, AuthModule,
    ConfigModule.forRoot({
      cache : true,
      isGlobal: true,
      load: [config]
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        secret: config.get('jwt.secret'),
        signOptions: { expiresIn: config.get('jwt.expiresIn') },
      }),
      global: true,
      inject : [ConfigService]
    }),
  ]
})
export class AppModule {}
