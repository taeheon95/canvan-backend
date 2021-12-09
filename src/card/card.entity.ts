import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { List } from '../list/list.entity';

@Entity()
export class Card {
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

  @ManyToOne(() => List, (list) => list.cardList, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'list_id', referencedColumnName: 'id' })
  list: List;
}
