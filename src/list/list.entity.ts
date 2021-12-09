import { Card } from '../card/card.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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
}
