import { Controller, Get, Body } from '@nestjs/common';
import { SpellService } from './spell.service';
import { AttachSpellDto } from './attach-spell.dto';

@Controller('webhook')
export class WebhookController {
  constructor(private readonly spellService: SpellService) {}

  // GET /webhook
  @Get()
  attachSpell(@Body() body: AttachSpellDto): string {
    if (!body.text) return this.spellService.generateSpell();
    return this.spellService.attachSpell(body.text);
  }
}
