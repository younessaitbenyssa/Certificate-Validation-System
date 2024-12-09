import { Module } from '@nestjs/common';
import { InstitutionService } from './institution.service';
import { InstitutionController } from './institution.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Institution } from './entities/institution.entity';
import { PorteurModule } from 'src/porteur/porteur.module';

@Module({
  imports: [TypeOrmModule.forFeature([Institution]),
  PorteurModule],
  controllers: [InstitutionController],
  providers: [InstitutionService],
  exports: [InstitutionService]
})
export class InstitutionModule {}
