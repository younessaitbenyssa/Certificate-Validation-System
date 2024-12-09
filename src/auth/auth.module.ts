import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UtilisateurModule } from 'src/utilisateur/utilisateur.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Institution } from 'src/institution/entities/institution.entity';
import { Porteur } from 'src/porteur/entities/porteur.entity';
import { InstitutionModule } from 'src/institution/institution.module';

@Module({
  imports:[TypeOrmModule.forFeature([Institution]),
  TypeOrmModule.forFeature([Porteur]),
    UtilisateurModule,
    InstitutionModule 
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports:[AuthService]
})

export class AuthModule {}
