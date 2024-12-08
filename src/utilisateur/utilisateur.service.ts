import { InjectRepository } from '@nestjs/typeorm';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';
import { Utilisateur } from './entities/utilisateur.entity';
import { Repository } from 'typeorm';
import { Injectable, NotFoundException} from '@nestjs/common';

@Injectable()
export class UtilisateurService {

  constructor(
    @InjectRepository(Utilisateur) private readonly utilisateurRepository:Repository<Utilisateur>
  ){}

  async create(createUtilisateurDto: CreateUtilisateurDto):Promise<Utilisateur> {
    const user = await this.utilisateurRepository.create(createUtilisateurDto);
    return this.utilisateurRepository.save(user); 
  }

  async findByEmail(email:string):Promise<Utilisateur>{
    const utilisateur = await this.utilisateurRepository.findOne({where:{email}})
    if(!utilisateur)
      throw new NotFoundException("Utilisateur Not Found")
    return utilisateur;
  }

  update(id: number, updateUtilisateurDto: UpdateUtilisateurDto) {
    return `This action updates a #${id} utilisateur`;
  }

  async remove(id: number):Promise<{message:string}> {
    const result = await this.utilisateurRepository.delete(id);
    if(result.affected === 0){
      throw new NotFoundException("utilisateur Not Found")
    }
    return {message:"User successfully deleted"}
  }
}
