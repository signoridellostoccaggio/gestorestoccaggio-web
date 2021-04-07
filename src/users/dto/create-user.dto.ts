import { IsEmail, IsNotEmpty } from 'class-validator';
import { UserEntity }          from '../entities/user.entity';

export class CreateUserDto implements UserEntity {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  passwordConfirm: string;
}
