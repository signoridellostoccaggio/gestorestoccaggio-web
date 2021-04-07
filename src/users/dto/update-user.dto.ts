import { PartialType }   from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.dto";
import { IsMongoId }     from "class-validator";

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsMongoId()
  _id: string;
}
