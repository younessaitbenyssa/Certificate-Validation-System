import { Test, TestingModule } from '@nestjs/testing';
import { ImageCertificatController } from './image-certificat.controller';
import { ImageCertificatService } from './image-certificat.service';

describe('ImageCertificatController', () => {
  let controller: ImageCertificatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImageCertificatController],
      providers: [ImageCertificatService],
    }).compile();

    controller = module.get<ImageCertificatController>(ImageCertificatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
