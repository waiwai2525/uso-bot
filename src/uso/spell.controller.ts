import { Controller, Get, Body } from '@nestjs/common';
import { SpellService } from './spell.service';
import { AttachSpellDto } from './attach-spell.dto';

@Controller('uso/spell')
export class SpellController {
  constructor(private readonly spellService: SpellService) {}

  // GET /uso/spell
  @Get()
  attachSpell(@Body() body: AttachSpellDto): string {
    if (!body.text) return this.spellService.generateSpell();
    return this.spellService.attachSpell(body.text);
  }
}
