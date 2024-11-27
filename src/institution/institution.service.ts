import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInstitutionDto } from './dto/create-institution.dto';
import { UpdateInstitutionDto } from './dto/update-institution.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Institution } from './entities/institution.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InstitutionService {
  constructor(
    @InjectRepository(Institution)
    private institutionRepository: Repository<Institution>,
  ){}
  async create(createInstitutionDto: CreateInstitutionDto): Promise<Institution> {
    const newInstitution = await this.institutionRepository.create(createInstitutionDto);
    return this.institutionRepository.save(newInstitution);
  }

  async findAll(): Promise<Institution[]> {
    return this.institutionRepository.find();
  }

  async findOne(id: number): Promise<Institution | null> {
    return this.institutionRepository.findOneBy({ id });
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
}
