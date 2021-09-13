import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { AuthLoginDto } from './dto/auth-login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(authLoginDto: AuthLoginDto): Promise<any> {
    const user = await this.usersService.findOne({
      username: authLoginDto.username,
    });
    const password = bcrypt.compare(authLoginDto.password, user.password);
    if (user && password) {
      const { ...result } = user;
      return result;
    }
    return null;
  }
}
