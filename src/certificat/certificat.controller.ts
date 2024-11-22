import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CertificatService } from './certificat.service';
import { CreateCertificatDto } from './dto/create-certificat.dto';
import { UpdateCertificatDto } from './dto/update-certificat.dto';

@Controller('certificat')
export class CertificatController {
  constructor(private readonly certificatService: CertificatService) {}

  @Post()
  create(@Body() createCertificatDto: CreateCertificatDto) {
    return this.certificatService.create(createCertificatDto);
  }

  @Get()
  findAll() {
    return this.certificatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.certificatService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCertificatDto: UpdateCertificatDto) {
    return this.certificatService.update(+id, updateCertificatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.certificatService.remove(+id);
  }
}
