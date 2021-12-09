import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CardDto } from './dto/card';
import { DeleteResult, Repository } from 'typeorm';
import { Card } from './card.entity';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card)
    private cardRepository: Repository<Card>,
  ) {}

  async findAll(): Promise<Card[]> {
    return await this.cardRepository.find();
  }

  async findById(id: number): Promise<Card> {
    return await this.cardRepository.findOne(id);
  }

  async create(card: CardDto): Promise<Card> {
    const createTime = String(Date.now());
    const newCard = await this.cardRepository.create({
      seq: card.seq,
      title: card.title,
      insert_time: createTime,
      update_time: createTime,
      list: { id: card.listId },
    });
    return await this.cardRepository.save(newCard);
  }

  async update(id: number, updateCard: Partial<CardDto>): Promise<Card> {
    const card = await this.cardRepository.findOne(id);
    const { title, seq, listId } = updateCard;
    card.title = title ? title : card.title;
    card.seq = seq ? seq : card.seq;
    card.list.id = listId ? listId : card.list.id;
    card.update_time = String(Date.now());
    return await this.cardRepository.save(card);
  }

  async delete(id: number): Promise<DeleteResult> {
    const card = await this.cardRepository.findOne(id);
    return await this.cardRepository.delete(card);
  }
  async deleteMany(listId: number): Promise<DeleteResult> {
    return await this.cardRepository.delete({
      list: { id: listId },
    });
  }
}
