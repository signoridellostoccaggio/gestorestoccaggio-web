import { Injectable }         from '@nestjs/common';
import { CreateUserDto }      from './dto/create-user.dto';
import { UpdateUserDto }      from './dto/update-user.dto';
import { Model }              from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { InjectModel }        from '@nestjs/mongoose';
import * as config            from '../config/config.json';
import * as argon2            from 'argon2';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>
  ) {}

  async create(createUserDto: CreateUserDto) {
    const password = await argon2.hash(createUserDto.password);
    const createdUser = new this.userModel({
      ...createUserDto,
      password
    });
    return createdUser.save();
  }

  findAll() {
    return this.userModel.find().exec();
  }

  findById(id: string) {
    return this.userModel.findById(id).exec();
  }

  findByQueryObj(o: Record<string, unknown>) {
    return this.userModel.find(o).exec();
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findOneAndUpdate(
      { _id: id },
      updateUserDto,
      { ...config.db.mongo.defaultUpdateOptions }
    ).exec();
  }

  remove(id: string) {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}
