import { Test, TestingModule } from '@nestjs/testing';
import { CertificatService } from './certificat.service';

describe('CertificatService', () => {
  let service: CertificatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CertificatService],
    }).compile();

    service = module.get<CertificatService>(CertificatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
