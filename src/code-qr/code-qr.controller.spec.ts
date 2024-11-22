import { Test, TestingModule } from '@nestjs/testing';
import { CodeQrController } from './code-qr.controller';
import { CodeQrService } from './code-qr.service';

describe('CodeQrController', () => {
  let controller: CodeQrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CodeQrController],
      providers: [CodeQrService],
    }).compile();

    controller = module.get<CodeQrController>(CodeQrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
