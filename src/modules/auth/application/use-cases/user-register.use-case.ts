import { Injectable } from '@nestjs/common';
import { RegisterDto } from '../../presentation/dtos/register.dto';

@Injectable()
export class UserRegister {
  execute(registerDto: RegisterDto) {
    console.log('UserRegister', registerDto);
  }
}
