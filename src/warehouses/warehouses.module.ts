import { Module }                     from '@nestjs/common';
import { WarehousesService }          from './warehouses.service';
import { WarehousesController }       from './warehouses.controller';
import { MongooseModule }             from '@nestjs/mongoose';
import { Warehouse, WarehouseSchema } from './schemas/warehouse.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Warehouse.name,
      schema: WarehouseSchema
    }])
  ],
  controllers: [WarehousesController],
  providers: [WarehousesService],
  exports: [WarehousesService]
})
export class WarehousesModule {}
