import { Module } from '@nestjs/common';
import { PorteurService } from './porteur.service';
import { PorteurController } from './porteur.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Porteur } from './entities/porteur.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Porteur])],
  controllers: [PorteurController],
  providers: [PorteurService],
})
export class PorteurModule {}
