import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInstitutionDto } from './dto/create-institution.dto';
import { UpdateInstitutionDto } from './dto/update-institution.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Institution } from './entities/institution.entity';
import { Repository } from 'typeorm';
import { PorteurService } from 'src/porteur/porteur.service';

@Injectable()
export class InstitutionService {
  constructor(
    @InjectRepository(Institution)
    private institutionRepository: Repository<Institution>,
    private porteurService:PorteurService,
  ){}
  async create(createInstitutionDto: CreateInstitutionDto): Promise<Institution> {
    const newInstitution = await this.institutionRepository.create(createInstitutionDto);
    return this.institutionRepository.save(newInstitution);
  }

  async findAll(): Promise<Institution[]> {
    return this.institutionRepository.find({relations:["porteurs"]});
  }

  async findOne(id: number): Promise<Institution> {
    const institution = await this.institutionRepository.findOne({
      where:{id},
      relations:['porteurs'],
    });
    if(!institution)
      throw new NotFoundException("Institution Not Found")
    return institution
  }

  async update(id: number, updateInstitutionDto: UpdateInstitutionDto) {
    const Institut = await this.findOne(id);

    if (!Institut){
      throw new NotFoundException('Institution Not Found')
    }

    Object.assign(Institut, updateInstitutionDto);
    return await this.institutionRepository.save(Institut);

  }

  async remove(id: number): Promise<void> {
    const institution = await this.findOne(id);
    if (!institution){
      throw new NotFoundException('Institution to delete is not found')
    }
    await this.institutionRepository.delete(id);
  }

  async addPorteurToInstitution(cin:string,institutionId:number):Promise<void>{
    const porteur = await this.porteurService.findPorteur(cin);
    const institution = await this.findOne(institutionId);
    institution.porteurs.push(porteur);
    await this.institutionRepository.save(institution);

  }

}
