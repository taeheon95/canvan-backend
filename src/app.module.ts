import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListModule } from './list/list.module';
import { CardModule } from './card/card.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ListModule,
    CardModule,
    MongooseModule.forRoot(process.env.MONGO_URI),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}