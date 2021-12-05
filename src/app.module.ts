import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListModule } from './list/list.module';
import { CardModule } from './card/card.module';

@Module({
  imports: [ListModule, CardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
