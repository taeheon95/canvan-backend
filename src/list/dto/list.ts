import { IsArray, IsNumber, IsString } from 'class-validator';
import { Card } from 'src/card/card.entity';

export class ListDto {
  @IsNumber()
  seq: number;

  @IsString()
  title: string;

  @IsArray()
  cardList: Card[];
}

class List {
  id: string;
  seq: number;
  name: string;
  insertTime: number;
  updateTime: number;
}

export default List;
