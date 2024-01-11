import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsoModule } from './uso/uso.module';
import { LineModule } from './webhook/line/line.module';

@Module({
  imports: [UsoModule, LineModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
