import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCertificatDto } from './dto/create-certificat.dto';
import { UpdateCertificatDto } from './dto/update-certificat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Certificat } from './entities/certificat.entity';
import { Repository } from 'typeorm';
import { PorteurService } from 'src/porteur/porteur.service';
import { InstitutionService } from 'src/institution/institution.service';
import * as QRCode from 'qrcode';
import { createCanvas, loadImage } from 'canvas';
import { writeFileSync } from 'fs';

@Injectable()
export class CertificatService {

  constructor(
    private porteurService : PorteurService,
    private instService: InstitutionService,
    @InjectRepository(Certificat) private readonly certeficatRepository: Repository<Certificat>

  ){}
  async create(createCertificatDto: CreateCertificatDto): Promise<Certificat> {
    const certeficat = this.certeficatRepository.create(createCertificatDto);
    const porteur = await this.porteurService.findPorteur(createCertificatDto.CIN)
    const institution = await this.instService.findOne(createCertificatDto.institutionId)
    certeficat.porteur = porteur;
    certeficat.institution = institution;
    const  savedCertificate = await this.certeficatRepository.save(certeficat);
    this.generateImageCertificate(savedCertificate);
    return savedCertificate;
  }

  async findAll() : Promise<Certificat[]> {
    return await this.certeficatRepository.find({
      relations: ["porteur","institution"]
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

  async generateImageCertificate(certificate:Certificat):Promise<any>{
    const qrCodeImage = await QRCode.toDataURL(certificate.id);
    const canvasWidth = 800;
    const canvasHeight = 600;
    const canvas = createCanvas(canvasWidth,canvasHeight);
    const ctx = canvas.getContext('2d')
    
    
     ctx.fillStyle = '#ffffff';
     ctx.fillRect(0, 0, canvasWidth, canvasHeight);
 
   
     ctx.fillStyle = '#000000';
     ctx.font = 'bold 28px Arial';
     ctx.fillText('Certificate of Completion', 200, 50);
 
     
     ctx.font = '18px Arial';
     ctx.fillText(`Name: ${certificate.porteur.name}`, 50, 150);
     ctx.fillText(`Institution: ${certificate.institution.name}`, 50, 200);
     ctx.fillText(`Date of Issue: ${certificate.dateEmission}`, 50, 250);
 
     // Step 6: Add QR Code
     const qrImage = await loadImage(qrCodeImage);
     ctx.drawImage(qrImage, 600, 400, 150, 150);
 
     const filePath = `./certificates/${certificate.id}.png`;
     writeFileSync(filePath, canvas.toBuffer('image/png'));
 

  }

}
