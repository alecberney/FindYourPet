import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly appService: AppService) {}

  @Get('miaou')
  miaou() {
    return 'miaou';
  }

  @Get('mia*ou')
  multipleMiaou() {
    return 'miaaaaaaaou';
  }

  @Get('mine/:id')
  findOne(@Param('id') id: string): string {
    return 'Hello word ' + id;
  }
}
