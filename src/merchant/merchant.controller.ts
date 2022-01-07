import { MerchantService } from './merchant.service';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateMerchantDto } from '../dto/create-merchant.dto';

@Controller('merchant')
export class MerchantController {
  constructor(private merchantService: MerchantService) {}

  @Post()
  async create(
    @Body()
    createMerchantDto: CreateMerchantDto,
  ) {
    return this.merchantService.create(createMerchantDto);
  }
}
