import {
  Body,
  Controller,
  Get,
  Post,
  Render,
  Request,
  Res,
  UseGuards
}                        from '@nestjs/common';
import { UsersService }  from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginGuard }    from '../common/guards/login.guard';

@Controller('auth')
export class AuthController {

  constructor(private usersService: UsersService) {}

  @Get('login')
  @Render('login')
  loginPage(@Request() req): { message: string } {
    return { message: req.flash('loginError') };
  }

  @Get('register')
  @Render('register')
  registerPage() {
    return;
  }

  @UseGuards(LoginGuard)
  @Post('login')
  login(@Res() res) {
    res.redirect('/');
  }

  @Post('register')
  async register(
    @Body()
      formData: CreateUserDto,
    @Request() req,
    @Res() res
  ) {
    if (formData.password === formData.passwordConfirm) {
      this.usersService.create(formData);
      req.flash('success', 'Registrazione effettuata! Esegui ora l\'accesso');
    }
    req.flash('registerError', 'Le password non corrispondono');
    res.redirect('/auth/register');
  }

  @Get('logout')
  logout(@Request() req, @Res() res) {
    req.logout();
    res.redirect('/auth/login');
  }
}
