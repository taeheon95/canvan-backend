import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCardDto, UpdateCardDto } from './dto/card';
import { Card, CardDocument } from './schema/Card.schema';
import { Model } from 'mongoose';

@Injectable()
export class CardService {
  constructor(@InjectModel(Card.name) private cardModel: Model<CardDocument>) {}

  async findAll() {
    return await this.cardModel.find();
  }

  async findById(id: string) {
    return await this.cardModel.findById(id);
  }

  async create(card: CreateCardDto) {
    const createdCard = new this.cardModel(card);
    return await createdCard.save();
  }

  async update(id: string, updateCard: UpdateCardDto) {
    return await this.cardModel.findByIdAndUpdate(id, { ...updateCard });
  }

  async delete(id: string) {
    return await this.cardModel.findByIdAndDelete(id);
  }
}
