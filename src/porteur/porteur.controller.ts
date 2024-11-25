import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { PorteurService } from './porteur.service';
import { CreatePorteurDto } from './dto/create-porteur.dto';
import { UpdatePorteurDto } from './dto/update-porteur.dto';

@Controller('porteur')
export class PorteurController {
  constructor(private readonly porteurService: PorteurService) {}

  @Post()
  create(@Body() createPorteurDto: CreatePorteurDto) {
    return this.porteurService.create(createPorteurDto);
  }

  @Get()
  findAll() {
    return this.porteurService.findAllPorteur();
  }

  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id: string) {
    return this.porteurService.findPorteur(+id);
  }

  @Patch(':id')
  update(@Param('id',ParseIntPipe) id: string, @Body() updatePorteurDto: UpdatePorteurDto) {
    return this.porteurService.updatePorteur(+id, updatePorteurDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseIntPipe) id: string) {
    return this.porteurService.remove(+id);
  }
}
