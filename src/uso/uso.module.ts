import { Module } from '@nestjs/common';
import { SpellController } from './spell.controller';
import { SpellService } from './spell.service';

@Module({
  imports: [],
  controllers: [SpellController],
  providers: [SpellService],
})
export class UsoModule {}
