import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { ImageCertificatService } from './image-certificat.service';
import { CreateImageCertificatDto } from './dto/create-image-certificat.dto';
import { UpdateImageCertificatDto } from './dto/update-image-certificat.dto';
import { Response } from 'express';

@Controller('image-certificat')
export class ImageCertificatController {
  constructor(private readonly imageCertificatService: ImageCertificatService) {}

  @Post()
  create(@Body() createImageCertificatDto: CreateImageCertificatDto) {
    return this.imageCertificatService.create(createImageCertificatDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string,@Res()res:Response) {
    return this.imageCertificatService.findOne(id,res);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imageCertificatService.remove(+id);
  }
}
