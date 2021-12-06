import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateListDto, UpdateListDto } from './dto/list';
import { List, ListDocument } from './schema/List.schema';

@Injectable()
export class ListService {
  constructor(@InjectModel(List.name) private listModel: Model<ListDocument>) {}

  async findAll() {
    return await this.listModel.find();
  }

  async findById(id: string) {
    return await this.listModel.findById(id);
  }

  async create(list: CreateListDto) {
    const createdList = new this.listModel(list);
    return await createdList.save();
  }

  async update(id: string, updateList: UpdateListDto) {
    return await this.listModel.findByIdAndUpdate(id, {
      ...updateList,
      update_time: Date.now(),
    });
  }

  async delete(id: string) {
    return await this.listModel.findByIdAndDelete(id);
  }
}
