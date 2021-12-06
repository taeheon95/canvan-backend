import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type CardDocument = Card & Document;

@Schema()
export class Card {
  @Prop()
  name: string;

  @Prop()
  seq: number;

  @Prop()
  insert_time: number;

  @Prop()
  update_time: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'List' })
  list_id: string;
}

export const CardSchema = SchemaFactory.createForClass(Card);
