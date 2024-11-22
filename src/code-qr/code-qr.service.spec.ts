import { Test, TestingModule } from '@nestjs/testing';
import { CodeQrService } from './code-qr.service';

describe('CodeQrService', () => {
  let service: CodeQrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CodeQrService],
    }).compile();

    service = module.get<CodeQrService>(CodeQrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
