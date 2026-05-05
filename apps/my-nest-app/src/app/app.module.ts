import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DataBaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/user/usermodule';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '../../../../.env',
    }),
    DataBaseModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
