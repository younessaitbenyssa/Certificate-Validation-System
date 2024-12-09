import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCertificatDto } from './dto/create-certificat.dto';
import { UpdateCertificatDto } from './dto/update-certificat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Certificat } from './entities/certificat.entity';
import { Repository } from 'typeorm';
import { PorteurService } from 'src/porteur/porteur.service';
import { InstitutionService } from 'src/institution/institution.service';

@Injectable()
export class CertificatService {

  constructor(
    private porteurService : PorteurService,
    private instService: InstitutionService,
    @InjectRepository(Certificat) private readonly certeficatRepository: Repository<Certificat>

  ){}
  async create(createCertificatDto: CreateCertificatDto): Promise<Certificat> {
    const certeficat = this.certeficatRepository.create(createCertificatDto);
    const porteur = await this.porteurService.findPorteur(createCertificatDto.porteurId)
    const institution = await this.instService.findOne(createCertificatDto.institutionId)
    certeficat.porteur = porteur;
    certeficat.institution = institution;
    return await this.certeficatRepository.save(certeficat);
  }

  async findAll() : Promise<Certificat[]> {
    return await this.certeficatRepository.find({
      relations: ['porteur', 'institution'],
    });
  }

  async findOne(id: string): Promise<Certificat> {
    const certeficat = await this.certeficatRepository.findOne({
      where: {id},
      relations: ['porteur', 'institution'],
    });
    if (!certeficat)
       throw new NotFoundException("Certificat Not Found")
    return certeficat;
  }

  async update(id: string, updateCertificatDto: UpdateCertificatDto): Promise<Certificat> {
    const result = await this.certeficatRepository.update(id, updateCertificatDto)
    if (result.affected == 0)
      throw new NotFoundException("Certificat Not Found");
    return this.certeficatRepository.findOne({
      where: {id},
      relations: ['porteur', 'institution'],
    });
  }

  async remove(id: string) : Promise<{ message: string }> {
    const certeficat = await this.findOne(id);
    if (!certeficat)
      throw new NotFoundException("there no certeficat with the provided ID")
    await this.certeficatRepository.delete(id)
    return {message: `the certeficat has been deleted successfully`}
  }
}
