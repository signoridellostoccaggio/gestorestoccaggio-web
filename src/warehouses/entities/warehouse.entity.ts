import { User } from '../../users/schemas/user.schema';

export interface WarehouseEntity {
  _id?: string;
  name: string;
  desc: string;
  address: string;
  creatorUserId: string | User;
}
