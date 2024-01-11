import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsoModule } from './uso/uso.module';

@Module({
  imports: [UsoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
