import { Module } from '@nestjs/common';
import { LineController } from './line.controller';
import { SpellService } from '../spell.service';
import { AiService } from '../ai.service';

@Module({
  imports: [],
  controllers: [LineController],
  providers: [SpellService, AiService],
})
export class LineModule {}
