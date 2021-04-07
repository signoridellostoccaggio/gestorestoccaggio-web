import { Injectable }   from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as argon2      from 'argon2';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByQueryObj({ email });
    const isVerified = await argon2.verify(user[0].password, password);
    if (user[0] && isVerified) return user;
    return null;
  }
}
