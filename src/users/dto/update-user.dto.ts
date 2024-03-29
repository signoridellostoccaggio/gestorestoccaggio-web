import { PartialType }           from '@nestjs/mapped-types';
import { CreateUserDto }         from './create-user.dto';
import { IsMongoId, IsNotEmpty } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsNotEmpty()
  @IsMongoId()
  _id: string;
}
