
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePorteurDto } from './dto/create-porteur.dto';
import { UpdatePorteurDto } from './dto/update-porteur.dto';
import { Porteur } from './entities/porteur.entity';
import { Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class PorteurService {

  constructor(
    @InjectRepository(Porteur) private readonly porteurRepository: Repository<Porteur>
  ){}

  async create(createPorteurDto: CreatePorteurDto):Promise<Porteur> {
    return this.porteurRepository.save(createPorteurDto)
  }

  async findAllPorteur():Promise<Porteur[]> {
    return this.porteurRepository.find({
      relations : ['certificates'] // we can use that or we can do that also : relations:{certificates : {institution:true}}
    });
  }

  async findPorteur(CIN: string):Promise<Porteur> {
    const porteur = await this.porteurRepository.findOne({where:{CIN},
    relations:['certificates']})
    if (!porteur) {
      throw new NotFoundException(`Porteur not found`);
    }
    return porteur;
  }

  async updatePorteur(CIN:string, updatePorteurDto: UpdatePorteurDto):Promise<Porteur> {
    const porteur = await this.findPorteur(CIN);
    await this.porteurRepository.update(CIN,updatePorteurDto);
    return this.porteurRepository.findOne({where:{CIN}});
  }

  async remove(CIN:string):Promise<{ message: string }> {
    const result = await this.porteurRepository.delete(CIN)
    if(result.affected === 0)
      throw new NotFoundException("Porteur Not Found !")
    return { message: `Porteursuccessfully deleted` };

  }
}
