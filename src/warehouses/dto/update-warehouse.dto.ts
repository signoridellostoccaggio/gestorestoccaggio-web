import { PartialType }           from '@nestjs/mapped-types';
import { CreateWarehouseDto }    from './create-warehouse.dto';
import { IsMongoId, IsNotEmpty } from 'class-validator';

export class UpdateWarehouseDto extends PartialType(CreateWarehouseDto) {
  @IsNotEmpty()
  @IsMongoId()
  _id: string;
}
