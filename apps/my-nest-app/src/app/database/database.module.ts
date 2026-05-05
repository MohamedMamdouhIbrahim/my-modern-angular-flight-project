import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.getOrThrow<string>('MYSQL_HOST'),
        port: configService.getOrThrow<number>('MYSQL_PORT'),
        username: configService.getOrThrow<string>('MYSQL_ROOT_USERNAME'),
        password: configService.getOrThrow<string>('MYSQL_ROOT_PASSWORD'),
        database: configService.getOrThrow<string>('MYSQL_DATABASE'),
        synchronize: true, // This should be false in production
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DataBaseModule {}
