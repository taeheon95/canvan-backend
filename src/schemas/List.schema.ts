import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ListDocument = List & Document;

@Schema()
export class List {
  @Prop()
  name: string;
  @Prop()
  seq: number;
  @Prop()
  insert_time: number;
  @Prop()
  update_time: number;
}

export const ListSchema = SchemaFactory.createForClass(List);
