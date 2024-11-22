import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CodeQrService } from './code-qr.service';
import { CreateCodeQrDto } from './dto/create-code-qr.dto';
import { UpdateCodeQrDto } from './dto/update-code-qr.dto';

@Controller('code-qr')
export class CodeQrController {
  constructor(private readonly codeQrService: CodeQrService) {}

  @Post()
  create(@Body() createCodeQrDto: CreateCodeQrDto) {
    return this.codeQrService.create(createCodeQrDto);
  }

  @Get()
  findAll() {
    return this.codeQrService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.codeQrService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCodeQrDto: UpdateCodeQrDto) {
    return this.codeQrService.update(+id, updateCodeQrDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.codeQrService.remove(+id);
  }
}
