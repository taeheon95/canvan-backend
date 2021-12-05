import { Injectable } from '@nestjs/common';
import List, { CreateListDto, UpdateListDto } from './dto/list';

@Injectable()
export class ListService {
  private readonly listArray: List[];
  private id: number;

  constructor() {
    this.listArray = [];
    this.id = 0;
  }

  async findAll() {
    return await this.listArray;
  }

  async findById(id: number) {
    return await this.listArray.find((list) => list.id === id);
  }

  async create(list: CreateListDto) {
    const newList = new List(this.id++, list.seq, list.name);
    this.listArray.push(newList);
    return await newList;
  }

  async update(id: number, dto: UpdateListDto) {
    const updateTime = new Date().getTime();
    const list = this.listArray.find((list) => list.id === id);
    list.seq = dto.seq ? dto.seq : list.seq;
    list.name = dto.name ? dto.name : list.name;
    list.updateTime = updateTime;
    return await list;
  }

  async delete(id: number) {
    const idx = this.listArray.findIndex((list) => list.id === id);
    this.listArray.splice(idx, 1);
    return await id;
  }
}
