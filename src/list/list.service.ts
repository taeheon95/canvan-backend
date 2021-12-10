import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, MoreThanOrEqual, Repository } from 'typeorm';
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

  async update(listArray: Partial<List[]>): Promise<List[]> {
    return await this.listRepository.save(listArray);
  }

  async delete(id: number): Promise<DeleteResult> {
    const list = await this.listRepository.findOne(id);
    return await this.listRepository.delete(list);
  }
}
