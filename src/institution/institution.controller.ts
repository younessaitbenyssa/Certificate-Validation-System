import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, ParseIntPipe, UseGuards } from '@nestjs/common';
import { InstitutionService } from './institution.service';
import { CreateInstitutionDto } from './dto/create-institution.dto';
import { UpdateInstitutionDto } from './dto/update-institution.dto';
import { Institution } from './entities/institution.entity';
import { Roles } from 'src/roles.decorator';
import { UtilisateurRole } from 'src/enums/utilisateur-role.enum';
import { AuthGuard } from 'src/auth/auth.guard';

@Roles(UtilisateurRole.INSTITUTION)
@Controller('institution')
@UseGuards(AuthGuard)
export class InstitutionController {
  constructor(private readonly institutionService: InstitutionService) {}

  @Post()
  async create(@Body(ValidationPipe) createInstitutionDto: CreateInstitutionDto) : Promise<Institution> {
    return this.institutionService.create(createInstitutionDto);
  }

  @Get()
  findAll(): Promise<Institution[]> {
    return this.institutionService.findAll();
  }

  
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
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.institutionService.remove(id);
  }
}
