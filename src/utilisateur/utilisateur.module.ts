import { Module } from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';
import { UtilisateurController } from './utilisateur.controller';
import { Utilisateur } from './entities/utilisateur.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Porteur } from 'src/porteur/entities/porteur.entity';
import { Institution } from 'src/institution/entities/institution.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Utilisateur])],
  controllers: [UtilisateurController],
  providers: [UtilisateurService],
})
export class UtilisateurModule {}
