import { Module } from '@nestjs/common';
import { LineController } from './line.controller';
import { SpellService } from '../spell.service';

@Module({
  imports: [],
  controllers: [LineController],
  providers: [SpellService],
})
export class LineModule {}
