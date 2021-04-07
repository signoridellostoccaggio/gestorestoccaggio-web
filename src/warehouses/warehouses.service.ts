import { Injectable, Logger }           from '@nestjs/common';
import { CreateWarehouseDto }           from './dto/create-warehouse.dto';
import { UpdateWarehouseDto }           from './dto/update-warehouse.dto';
import { InjectModel }                  from '@nestjs/mongoose';
import { Warehouse, WarehouseDocument } from './schemas/warehouse.schema';
import { Model }                        from 'mongoose';
import * as config                      from '../config/config.json';

@Injectable()
export class WarehousesService {

  constructor(
    @InjectModel(Warehouse.name)
    private warehouseModel: Model<WarehouseDocument>
  ) {}

  create(createWarehouseDto: CreateWarehouseDto) {
    const createdWarehouse = new this.warehouseModel(createWarehouseDto);
    return createdWarehouse.save();
  }

  findAll() {
    return this.warehouseModel.find().exec();
  }

  findById(id: string) {
    return this.warehouseModel.findById(id).exec();
  }

  update(id: string, updateWarehouseDto: UpdateWarehouseDto) {
    return this.warehouseModel.findOneAndUpdate(
      { _id: id },
      updateWarehouseDto,
      { ...config.db.mongo.defaultUpdateOptions }
    ).exec();
  }

  remove(id: string) {
    return this.warehouseModel.findByIdAndDelete(id).exec();
  }
}
