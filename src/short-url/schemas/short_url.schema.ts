import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ShortUrlDocument = ShortUrl & Document;

@Schema()
export class ShortUrl {
  @Prop()
  url_long: string;

  @Prop()
  url_short: string;
}

export const ShortUrlSchema = SchemaFactory.createForClass(ShortUrl);
