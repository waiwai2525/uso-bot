import { Module } from '@nestjs/common';
import { WebhookController } from './webhook.controller';
import { SpellService } from './spell.service';
import { AiService } from './ai.service';

@Module({
  imports: [],
  controllers: [WebhookController],
  providers: [SpellService, AiService],
})
export class webhookModule {}
