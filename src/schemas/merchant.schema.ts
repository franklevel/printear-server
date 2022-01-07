import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MerchantDocument = Merchant & Document;

@Schema()
export class Merchant {
  @Prop()
  name: string;

  @Prop({ type: Number, unique: true, required: true })
  storeId: number;

  @Prop()
  accessToken: string;
}

export const MerchantSchema = SchemaFactory.createForClass(Merchant);
