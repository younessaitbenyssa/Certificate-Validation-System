import { Test, TestingModule } from '@nestjs/testing';
import { ImageCertificatService } from './image-certificat.service';

describe('ImageCertificatService', () => {
  let service: ImageCertificatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImageCertificatService],
    }).compile();

    service = module.get<ImageCertificatService>(ImageCertificatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
