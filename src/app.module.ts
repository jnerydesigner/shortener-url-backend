import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ShortUrlModule } from './short-url/short-url.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'upload', 'avatar'),
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/shorturl', {
      useFindAndModify: false,
    }),
    ConfigModule.forRoot(),
    ShortUrlModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // nda
}
