import { Module } from '@nestjs/common';
import { PorteurService } from './porteur.service';
import { PorteurController } from './porteur.controller';

@Module({
  controllers: [PorteurController],
  providers: [PorteurService],
})
export class PorteurModule {}
