import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Card } from '../../card/schema/Card.schema';
import * as mongoose from 'mongoose';

export type ListDocument = List & Document;

@Schema()
export class List {
  @Prop()
  name: string;

  @Prop()
  seq: number;

  @Prop({ default: Date.now() })
  insert_time: number;

  @Prop({ default: Date.now() })
  update_time: number;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'cards' }] })
  cardList: Card[];
}

export const ListSchema = SchemaFactory.createForClass(List);
