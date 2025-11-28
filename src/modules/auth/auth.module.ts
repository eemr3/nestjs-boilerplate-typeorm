import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { AuthService } from './application/auth.service';
import { UserRegister } from './application/use-cases/user-register.use-case';
import { Login } from './application/use-cases/login.use-case';
import { AuthController } from './presentation/auth.controller';

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [AuthService, UserRegister, Login],
})
export class AuthModule {}
