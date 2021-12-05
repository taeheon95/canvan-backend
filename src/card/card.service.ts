import { Injectable } from '@nestjs/common';
import Card, { CreateCardDto, UpdateCardDto } from './dto/card';

@Injectable()
export class CardService {
  private readonly cardList: Card[];
  private id: number;

  constructor() {
    this.cardList = [];
    this.id = 0;
  }

  async findAll() {
    return await this.cardList;
  }

  async findById(id: number) {
    return await this.cardList.find((list) => list.id === id);
  }

  async create(card: CreateCardDto) {
    const newCard: Card = new Card(
      this.id++,
      card.seq,
      card.name,
      card.list_id,
    );
    this.cardList.push(newCard);
    return await newCard;
  }

  async update(id: number, updateCard: UpdateCardDto) {
    const { seq, name, list_id } = updateCard;
    const updateTime = new Date().getTime();
    const card = this.cardList.find((card) => card.id === id);
    card.seq = seq ? seq : card.seq;
    card.name = name ? name : card.name;
    card.list_id = list_id ? list_id : card.list_id;
    card.updateTime = updateTime;
    return await card;
  }

  async delete(id: number) {
    const idx = this.cardList.findIndex((card) => card.id === id);
    this.cardList.splice(idx, 1);
    return await id;
  }
}
