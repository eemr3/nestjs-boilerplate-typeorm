import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { appConfig, getDatabaseConfig } from './config';
import { UserModule } from './modules/user/user.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [appConfig],
    }),
    TypeOrmModule.forRoot({
      ...getDatabaseConfig(),
      autoLoadEntities: true,
    }),
    UserModule,
  ],
})
export class AppModule {}
