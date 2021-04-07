import { Prop, Schema, SchemaFactory }        from '@nestjs/mongoose';
import { WarehouseEntity }                    from '../entities/warehouse.entity';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { User }                               from '../../users/schemas/user.schema';

export type WarehouseDocument = Warehouse & Document;

@Schema()
export class Warehouse implements WarehouseEntity {
  @Prop()
  address: string;

  @Prop()
  desc: string;

  @Prop()
  name: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name })
  creatorUserId: string;
}

export const WarehouseSchema = SchemaFactory.createForClass(Warehouse);
