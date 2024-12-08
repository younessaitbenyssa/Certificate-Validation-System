import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards, ValidationPipe } from '@nestjs/common';
import { PorteurService } from './porteur.service';
import { CreatePorteurDto } from './dto/create-porteur.dto';
import { UpdatePorteurDto } from './dto/update-porteur.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { UtilisateurRole } from 'src/enums/utilisateur-role.enum';
import { Roles } from 'src/roles.decorator';
import { RolesGuard } from 'src/roles/roles.guard';

@UseGuards(AuthGuard,RolesGuard)
@Roles(UtilisateurRole.PORTEUR)
@Controller('porteur')

export class PorteurController {
  constructor(private readonly porteurService: PorteurService) {}


  @Post()
  create(@Body(ValidationPipe) createPorteurDto: CreatePorteurDto) {
    return this.porteurService.create(createPorteurDto);
  }

  @Roles(UtilisateurRole.INSTITUTION)
  @Get()
  findAll() {
    return this.porteurService.findAllPorteur();
  }
  
  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id: number) {
    return this.porteurService.findPorteur(id);
  }

  @Patch(':id')
  update(@Param('id',ParseIntPipe) id: number, @Body() updatePorteurDto: UpdatePorteurDto) {
    return this.porteurService.updatePorteur(id, updatePorteurDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseIntPipe) id: number) {
    return this.porteurService.remove(id);
  }
}
