import { List } from '../list/list.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Board {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: false, update: false })
  create_time: string;

  @OneToMany(() => List, (list) => list.board)
  listList: List[];
}
