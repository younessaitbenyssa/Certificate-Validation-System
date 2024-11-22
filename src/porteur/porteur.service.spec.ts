import { Test, TestingModule } from '@nestjs/testing';
import { PorteurService } from './porteur.service';

describe('PorteurService', () => {
  let service: PorteurService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PorteurService],
    }).compile();

    service = module.get<PorteurService>(PorteurService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
