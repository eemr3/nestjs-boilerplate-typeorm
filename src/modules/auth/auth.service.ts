import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { compare } from '../../shared/helpers';

@Injectable()
export class AuthService {
  constructor(
    private jwt: JwtService,
    private users: UserService,
  ) {}

  async login(email: string, password: string) {
    const user = (await this.users.findAll()).find((u) => u.email === email);

    if (!user || !(await compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return {
      accessToken: this.jwt.sign({ sub: user.id }),
      user,
    };
  }
}
