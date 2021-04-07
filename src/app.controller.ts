import { Controller, Get, Render, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard }                 from './common/guards/authenticated.guard';

@Controller()
export class AppController {

  @UseGuards(AuthenticatedGuard)
  @Get()
  @Render('index')
  homePage(): string {
    return;
  }
}
