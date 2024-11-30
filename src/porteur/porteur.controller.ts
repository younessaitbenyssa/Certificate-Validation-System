import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards } from '@nestjs/common';
import { PorteurService } from './porteur.service';
import { CreatePorteurDto } from './dto/create-porteur.dto';
import { UpdatePorteurDto } from './dto/update-porteur.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { UtilisateurRole } from 'src/enums/utilisateur-role.enum';
import { Roles } from 'src/roles.decorator';
import { RolesGuard } from 'src/roles/roles.guard';

@UseGuards(AuthGuard,RolesGuard)

@Controller('porteur')
export class PorteurController {
  constructor(private readonly porteurService: PorteurService) {}


  @Post()
  create(@Body() createPorteurDto: CreatePorteurDto) {
    return this.porteurService.create(createPorteurDto);
  }

  @Roles(UtilisateurRole.INSTITUTION)
  @Get()
  findAll() {
    return this.porteurService.findAllPorteur();
  }

  @Roles(UtilisateurRole.PORTEUR)
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
