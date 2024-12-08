import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';

@Controller('utilisateur')
export class UtilisateurController {
  constructor(private readonly utilisateurService: UtilisateurService) {}

  @Post()
  create(@Body(ValidationPipe) createUtilisateurDto: CreateUtilisateurDto) {
    return this.utilisateurService.create(createUtilisateurDto);
  }
}
