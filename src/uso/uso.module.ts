import { Module } from '@nestjs/common';
import { UsoController } from './uso.controller';
import { UsoService } from './uso.service';

@Module({
  imports: [],
  controllers: [UsoController],
  providers: [UsoService],
})
export class UsoModule {}
