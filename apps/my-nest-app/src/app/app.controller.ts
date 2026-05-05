import { Controller, Get, Query } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getData(@Query('to') query: any) {
    return { query };
  }
}
