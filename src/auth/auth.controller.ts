import { Body, Controller, HttpCode, HttpStatus, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUtilisateurDto } from 'src/utilisateur/dto/create-utilisateur.dto';
import { RegisterDto } from 'src/utilisateur/dto/register-utilisateur.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() utilisateurDto:CreateUtilisateurDto) {    
    return this.authService.signIn(utilisateurDto);
  }

  @Post('register')
  signUp(@Body() register:RegisterDto){
    return this.authService.signUp(register)
  }

  @Post('refresh')
  refreshToken(@Body('refreshToken') refreshToken: string) {
    return this.authService.refreshToken(refreshToken);
  }
}
