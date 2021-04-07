import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document }                    from 'mongoose';
import { UserEntity }                  from '../entities/user.entity';

export type UserDocument = User & Document;

@Schema()
export class User implements UserEntity {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
