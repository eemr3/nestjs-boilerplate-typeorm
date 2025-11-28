import { Injectable } from '@nestjs/common';
import { UserRegister } from './use-cases/user-register.use-case';
import { RegisterDto } from '../presentation/dtos/register.dto';
import { LoginDto } from '../presentation/dtos/login.dto';
import { Login } from './use-cases/login.use-case';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRegister: UserRegister,
    private readonly loginUseCase: Login,
  ) {}

  async register(registerDto: RegisterDto) {
    return this.userRegister.execute(registerDto);
  }

  async login(loginDto: LoginDto) {
    return this.loginUseCase.execute(loginDto);
  }
}
