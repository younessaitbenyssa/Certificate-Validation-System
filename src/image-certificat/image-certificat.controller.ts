import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImageCertificatService } from './image-certificat.service';
import { CreateImageCertificatDto } from './dto/create-image-certificat.dto';
import { UpdateImageCertificatDto } from './dto/update-image-certificat.dto';

@Controller('image-certificat')
export class ImageCertificatController {
  constructor(private readonly imageCertificatService: ImageCertificatService) {}

  @Post()
  create(@Body() createImageCertificatDto: CreateImageCertificatDto) {
    return this.imageCertificatService.create(createImageCertificatDto);
  }

  @Get()
  findAll() {
    return this.imageCertificatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imageCertificatService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImageCertificatDto: UpdateImageCertificatDto) {
    return this.imageCertificatService.update(+id, updateImageCertificatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imageCertificatService.remove(+id);
  }
}
