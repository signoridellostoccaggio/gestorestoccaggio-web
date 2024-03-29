import { Module }               from '@nestjs/common';
import { AppController }        from './app.controller';
import { AppService }           from './app.service';
import { MongooseModule }       from '@nestjs/mongoose';
import { UsersModule }          from './users/users.module';
import { AuthModule }           from './auth/auth.module';
import { AuthController }       from './auth/auth.controller';
import { UsersController }      from './users/users.controller';
import { WarehousesModule }     from './warehouses/warehouses.module';
import * as config              from './config/config.json';
import { WarehousesController } from './warehouses/warehouses.controller';


@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://pippo:stoccaggio2021@cluster0.n8pcc.mongodb.net/db1?retryWrites=true&w=majority',
      { ...config.db.mongo.defaultRootOptions }),
    UsersModule,
    AuthModule,
    WarehousesModule
  ],
  controllers: [AppController, UsersController, AuthController, WarehousesController],
  providers: [AppService]
})
export class AppModule {
}
