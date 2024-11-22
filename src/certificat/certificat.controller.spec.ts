import { Test, TestingModule } from '@nestjs/testing';
import { CertificatController } from './certificat.controller';
import { CertificatService } from './certificat.service';

describe('CertificatController', () => {
  let controller: CertificatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CertificatController],
      providers: [CertificatService],
    }).compile();

    controller = module.get<CertificatController>(CertificatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
