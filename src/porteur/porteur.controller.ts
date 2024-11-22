import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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
    return this.porteurService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.porteurService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePorteurDto: UpdatePorteurDto) {
    return this.porteurService.update(+id, updatePorteurDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.porteurService.remove(+id);
  }
}
