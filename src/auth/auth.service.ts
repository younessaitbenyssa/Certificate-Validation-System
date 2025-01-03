import { Institution } from 'src/institution/entities/institution.entity';
import { InstitutionService } from './../institution/institution.service';
import { CreateUtilisateurDto } from './../utilisateur/dto/create-utilisateur.dto';
import { Injectable, NotFoundException, UnauthorizedException, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UtilisateurRole } from 'src/enums/utilisateur-role.enum';
import { RegisterDto } from 'src/utilisateur/dto/register-utilisateur.dto';
import { UtilisateurService } from 'src/utilisateur/utilisateur.service';
import { CreateInstitutionDto } from 'src/institution/dto/create-institution.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Porteur } from 'src/porteur/entities/porteur.entity';
import * as bcrypt from 'bcrypt';
import { ConfigType } from '@nestjs/config';
import refreshJwtConfig from 'src/config/refresh-jwt.config';


@Injectable()
export class AuthService {
    constructor(private utilisateurService:UtilisateurService,
        private institutionService:InstitutionService,
        @InjectRepository(Institution) private institutionRepository: Repository<Institution>,
        @InjectRepository(Porteur) private porteurRepository: Repository<Porteur>,
        @Inject(refreshJwtConfig.KEY) private refreshTokenConfig:ConfigType<typeof refreshJwtConfig>,
        private jwtService:JwtService,
    ){}

    async signIn(utilisateur:CreateUtilisateurDto):Promise<{'access-token':string, 'refreshToken':string}>{
        const user = await this.utilisateurService.findByEmail(utilisateur.email);
        if(!user)
            throw new NotFoundException("Utilisateur Not Found! ");
        if(!await bcrypt.compare(utilisateur.password, user.password))
            throw new UnauthorizedException();

        const roles = Array.isArray(user.role) ? user.role : [user.role];
        const payload = {sub:user.id,email:user.email,roles}
        const refreshToken = this.jwtService.sign(payload, this.refreshTokenConfig)
        return{
            'access-token':await this.jwtService.signAsync(payload),
            'refreshToken': await this.jwtService.signAsync(payload, this.refreshTokenConfig)
        }
    }

    async signUp(register:RegisterDto):Promise<CreateUtilisateurDto>{
        const utilisateurDto = new CreateUtilisateurDto()
        utilisateurDto.email = register.email;
        utilisateurDto.password = await bcrypt.hash(register.password, 10);
        utilisateurDto.role = register.role;
        const utilisateur = await this.utilisateurService.create(utilisateurDto);
        if(register.role === UtilisateurRole.PORTEUR){
            const porteur = new Porteur();
            porteur.name = register.name;
            porteur.CIN = register.CIN;
            porteur.telephone = register.telephone;
            porteur.utilisateur = utilisateur;
            console.log("here is the porteur" + porteur.telephone)
            const porteurCreated = await this.porteurRepository.create(porteur);
            const institution = await this.institutionService.findOne(register.institutionId);
            if(porteurCreated)
                institution.porteurs.push(porteurCreated);
            await this.porteurRepository.save(porteurCreated);
            await this.institutionRepository.save(institution);
        }
        else if(register.role === UtilisateurRole.INSTITUTION){
            const institution = new Institution();
            institution.name = register.name;
            institution.adresse = register.adresse;
            institution.telephone = register.telephone;
            institution.utilisateur = utilisateur;
            await this.institutionRepository.save(institution);
        }
        return utilisateurDto;

    }

    async refreshToken(oldRefreshToken: string): Promise<{ accessToken: string }> {
        try {

            const decodedToken = this.jwtService.decode(oldRefreshToken);
            console.log('Decoded Token:', decodedToken);
            

          const payload = await this.jwtService.verifyAsync(oldRefreshToken, {
            secret: this.refreshTokenConfig.secret,
          });

      
          const user = await this.utilisateurService.findByEmail(payload.email);
          if (!user) throw new UnauthorizedException();

          
      
          const roles = Array.isArray(user.role) ? user.role : [user.role];
          const newPayload = { sub: user.id, email: user.email, roles };
      
          const newAccessToken = this.jwtService.sign(newPayload);
      
          return { accessToken: newAccessToken};
        } catch (err) {
          throw new UnauthorizedException('Invalid or expired refresh token');
        }
      }
      
}
