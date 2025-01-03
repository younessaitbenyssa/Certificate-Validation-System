import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, ParseIntPipe, UseGuards } from '@nestjs/common';
import { InstitutionService } from './institution.service';
import { CreateInstitutionDto } from './dto/create-institution.dto';
import { UpdateInstitutionDto } from './dto/update-institution.dto';
import { Institution } from './entities/institution.entity';
import { Roles } from 'src/roles.decorator';
import { UtilisateurRole } from 'src/enums/utilisateur-role.enum';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/roles/roles.guard';



@UseGuards(AuthGuard,RolesGuard)


@Controller('institution')
export class InstitutionController {
  constructor(private readonly institutionService: InstitutionService) {}


  @Roles(UtilisateurRole.ADMIN)
  @Post()
  async create(@Body(ValidationPipe) createInstitutionDto: CreateInstitutionDto) : Promise<Institution> {
    return this.institutionService.create(createInstitutionDto);
  }

  @Roles(UtilisateurRole.ADMIN)
  @Get()
  findAll(): Promise<Institution[]> {
    return this.institutionService.findAll();
  }


  @Roles(UtilisateurRole.INSTITUTION)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.institutionService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number, 
    @Body(ValidationPipe) updateInstitutionDto: UpdateInstitutionDto
    ): Promise<Institution> {
    return this.institutionService.update(id, updateInstitutionDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.institutionService.remove(id);
  }

  @Post(":cin/:id")
  addPorteurToInstitution(@Param('cin') cin:string,@Param('id',ParseIntPipe) id:number){
    return this.institutionService.addPorteurToInstitution(cin,id);
  }
}
