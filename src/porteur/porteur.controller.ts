import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards, ValidationPipe } from '@nestjs/common';
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



  @Roles(UtilisateurRole.ADMIN)
  @Post()
  create(@Body(ValidationPipe) createPorteurDto: CreatePorteurDto) {
    return this.porteurService.create(createPorteurDto);
  }

  @Roles(UtilisateurRole.ADMIN,UtilisateurRole.INSTITUTION)
  @Get()
  findAll() {
    return this.porteurService.findAllPorteur();
  }


  @Roles(UtilisateurRole.ADMIN,UtilisateurRole.INSTITUTION)
  @Get(':CIN')
  findOne(@Param('CIN') CIN: string) {
    return this.porteurService.findPorteur(CIN);
  }

  @Roles(UtilisateurRole.INSTITUTION)
  @Patch(':CIN')
  update(@Param('CIN') CIN:string, @Body() updatePorteurDto: UpdatePorteurDto) {
    return this.porteurService.updatePorteur(CIN, updatePorteurDto);
  }

  @Roles(UtilisateurRole.INSTITUTION)
  @Delete(':CIN')
  remove(@Param('CIN') CIN:string) {
    return this.porteurService.remove(CIN);
  }
}
