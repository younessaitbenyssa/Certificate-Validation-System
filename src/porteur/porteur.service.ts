import { Injectable } from '@nestjs/common';
import { CreatePorteurDto } from './dto/create-porteur.dto';
import { UpdatePorteurDto } from './dto/update-porteur.dto';

@Injectable()
export class PorteurService {
  create(createPorteurDto: CreatePorteurDto) {
    return 'This action adds a new porteur';
  }

  findAll() {
    return `This action returns all porteur`;
  }

  findOne(id: number) {
    return `This action returns a #${id} porteur`;
  }

  update(id: number, updatePorteurDto: UpdatePorteurDto) {
    return `This action updates a #${id} porteur`;
  }

  remove(id: number) {
    return `This action removes a #${id} porteur`;
  }
}
