import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { ListDto } from './dto/list';
import { List } from './List.entity';

@Injectable()
export class ListService {
  constructor(
    @InjectRepository(List)
    private listRepository: Repository<List>,
  ) {}

  async findAll(): Promise<List[]> {
    return await this.listRepository.find({
      relations: ['cardList'],
    });
  }

  async findById(id: number): Promise<List> {
    return await this.listRepository.findOne(id, {
      relations: ['cardList'],
    });
  }

  async create(list: ListDto): Promise<List> {
    const createTime = String(Date.now());
    return await this.listRepository.save({
      seq: list.seq,
      title: list.title,
      insert_time: createTime,
      update_time: createTime,
      cardList: [],
    });
  }

  async update(id: number, updateList: Partial<ListDto>): Promise<List> {
    const list = await this.listRepository.findOne(id);
    const { seq, title } = updateList;
    list.seq = seq ? seq : list.seq;
    list.title = title ? title : list.title;
    list.update_time = String(Date.now());
    return await this.listRepository.save(list);
  }

  async delete(id: number): Promise<DeleteResult> {
    const list = await this.listRepository.findOne(id);
    return await this.listRepository.delete(list);
  }
}
