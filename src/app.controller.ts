import { Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/product/:storeId/:id')
  getProductById(
    @Param('id', ParseIntPipe) id: number,
    @Param('storeId', ParseIntPipe) storeId: number,
  ) {
    return this.appService.getProductById(id, storeId);
  }

  @Post('/auth/:code')
  async getToken(@Param('code') code: string) {
    return this.appService.getToken(code);
  }

  @Get('/product/:storeId')
  getProducts(@Param('storeId', ParseIntPipe) storeId: number) {
    return this.appService.getProducts(storeId);
  }
}
