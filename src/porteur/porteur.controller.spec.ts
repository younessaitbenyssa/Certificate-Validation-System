import { Test, TestingModule } from '@nestjs/testing';
import { PorteurController } from './porteur.controller';
import { PorteurService } from './porteur.service';

describe('PorteurController', () => {
  let controller: PorteurController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PorteurController],
      providers: [PorteurService],
    }).compile();

    controller = module.get<PorteurController>(PorteurController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
