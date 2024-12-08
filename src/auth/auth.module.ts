import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UtilisateurModule } from 'src/utilisateur/utilisateur.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Institution } from 'src/institution/entities/institution.entity';
import { Porteur } from 'src/porteur/entities/porteur.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Institution]),
  TypeOrmModule.forFeature([Porteur]),
    UtilisateurModule, 
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports:[AuthService]
})

export class AuthModule {}
