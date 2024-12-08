
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
      relations : ['certificates.institution'] // we can use that or we can do that also : relations:{certificates : {institution:true}}
    });
  }

  async findPorteur(id: number):Promise<Porteur> {
    const porteur = await this.porteurRepository.findOne({where:{id}})
    if (!porteur) {
      throw new NotFoundException(`Porteur with ID ${id} not found`);
    }
    return porteur;
  }

  async updatePorteur(id: number, updatePorteurDto: UpdatePorteurDto):Promise<Porteur> {
    const porteur = await this.findPorteur(id);
    await this.porteurRepository.update(id,updatePorteurDto);
    return this.porteurRepository.findOne({where:{id}});
  }

  async remove(id: number):Promise<{ message: string }> {
    const result = await this.porteurRepository.delete(id)
    if(result.affected === 0)
      throw new NotFoundException("Porteur Not Found !")
    return { message: `Porteur with ID ${id} successfully deleted` };

  }
}
