import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Board } from '../board/board.entity';
import { Card } from '../card/card.entity';

@Entity()
export class List {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: false })
  seq: number;

  @Column({ nullable: false, update: false })
  insert_time: string;

  @Column({ nullable: false })
  update_time: string;

  @OneToMany(() => Card, (card) => card.list)
  cardList: Card[];

  @ManyToOne(() => Board, (board) => board.listList, { onDelete: 'CASCADE' })
  board: Board;
}
