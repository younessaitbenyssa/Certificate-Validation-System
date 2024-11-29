import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UtilisateurModule } from 'src/utilisateur/utilisateur.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { UtilisateurService } from 'src/utilisateur/utilisateur.service';
import { PorteurService } from 'src/porteur/porteur.service';
import { InstitutionService } from 'src/institution/institution.service';
import { PorteurModule } from 'src/porteur/porteur.module';
import { InstitutionModule } from 'src/institution/institution.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Institution } from 'src/institution/entities/institution.entity';
import { Porteur } from 'src/porteur/entities/porteur.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Institution]),
  TypeOrmModule.forFeature([Porteur]),
    UtilisateurModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports:[AuthService]
})

export class AuthModule {}
