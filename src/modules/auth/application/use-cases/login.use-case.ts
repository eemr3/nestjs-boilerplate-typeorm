import { LoginDto } from '../../presentation/dtos/login.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class Login {
  execute(loginDto: LoginDto) {
    console.log('Login', loginDto);
  }
}
