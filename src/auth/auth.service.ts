import { Institution } from 'src/institution/entities/institution.entity';
import { InstitutionService } from './../institution/institution.service';
import { CreateUtilisateurDto } from './../utilisateur/dto/create-utilisateur.dto';
import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UtilisateurRole } from 'src/enums/utilisateur-role.enum';
import { CreatePorteurDto } from 'src/porteur/dto/create-porteur.dto';
import { PorteurService } from 'src/porteur/porteur.service';
import { RegisterDto } from 'src/utilisateur/dto/register-utilisateur.dto';
import { UtilisateurService } from 'src/utilisateur/utilisateur.service';
import { CreateInstitutionDto } from 'src/institution/dto/create-institution.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Porteur } from 'src/porteur/entities/porteur.entity';

@Injectable()
export class AuthService {
    constructor(private utilisateurService:UtilisateurService,
        @InjectRepository(Institution) private institutionRepository: Repository<Institution>,
        @InjectRepository(Porteur) private porteurRepository: Repository<Porteur>,
        private jwtService:JwtService,
    ){}

    async signIn(utilisateur:CreateUtilisateurDto):Promise<{'access-token':string}>{
        const user = await this.utilisateurService.findByEmail(utilisateur.email);
        if(!user)
            throw new NotFoundException("Utilisateur Not Found! ");
        if(user.password!=utilisateur.password)
            throw new UnauthorizedException();

        const payload = {sub:user.id,email:user.email,role:user.role}
        return{'access-token':await this.jwtService.signAsync(payload)}

    }

    async signUp(register:RegisterDto):Promise<CreateUtilisateurDto>{
        const utilisateurDto = new CreateUtilisateurDto()
        utilisateurDto.email=register.email;
        utilisateurDto.password=register.password;
        utilisateurDto.role = register.role;
        const utilisateur = await this.utilisateurService.create(utilisateurDto);
        if(register.role===UtilisateurRole.PORTEUR){
            const porteur = new Porteur();
            porteur.nom_complet = register.name;
            porteur.telephone=register.telephone;
            porteur.utilisateur = utilisateur;
            await this.porteurRepository.save(porteur);
        }
        else if(register.role===UtilisateurRole.INSTITUTION){
            const institution = new Institution();
            institution.name = register.name;
            institution.adresse = register.adresse;
            institution.telephone = register.telephone;
            institution.utilisateur = utilisateur;
            await this.institutionRepository.save(institution);
        }
        return utilisateurDto;

    }
}
