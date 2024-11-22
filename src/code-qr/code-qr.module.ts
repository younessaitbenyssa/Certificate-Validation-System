import { Module } from '@nestjs/common';
import { CodeQrService } from './code-qr.service';
import { CodeQrController } from './code-qr.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CodeQr } from './entities/code-qr.entity';

@Module({
  imports:[TypeOrmModule.forFeature([CodeQr])],
  controllers: [CodeQrController],
  providers: [CodeQrService],
})
export class CodeQrModule {}
