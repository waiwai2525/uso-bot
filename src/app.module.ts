import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LineModule } from './webhook/line/line.module';
import { webhookModule } from './webhook/webhook.module';

@Module({
  imports: [LineModule, webhookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
