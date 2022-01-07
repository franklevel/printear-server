import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Merchant, MerchantDocument } from '../schemas/merchant.schema';
import { CreateMerchantDto } from '../dto/create-merchant.dto';

@Injectable()
export class MerchantService {
  constructor(
    @InjectModel(Merchant.name) private MerchantModel: Model<MerchantDocument>,
  ) {}

  async create(createMerchantDto: CreateMerchantDto): Promise<Merchant> {
    const createdMerchant = new this.MerchantModel(createMerchantDto);
    return createdMerchant.save();
  }

  async findAll(): Promise<Merchant[]> {
    return this.MerchantModel.find().exec();
  }
}
