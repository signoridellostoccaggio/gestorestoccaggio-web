import { Controller, Get, Render, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard }                 from './common/guards/authenticated.guard';

@Controller()
@UseGuards(AuthenticatedGuard)
export class AppController {

  @Get()
  @Render('index')
  homePage(): string {
    return;
  }

  @Get('err')
  @Render('err')
  err() {
    return;
  }
}
