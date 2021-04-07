import { WarehouseEntity }                   from '../entities/warehouse.entity';
import { IsMongoId, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateWarehouseDto implements WarehouseEntity {
  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  desc: string;

  @IsNotEmpty()
  name: string;

  @IsMongoId()
  @IsOptional()
  creatorUserId: string;
}
