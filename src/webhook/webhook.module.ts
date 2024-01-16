import { Module } from '@nestjs/common';
import { WebhookController } from './webhook.controller';
import { SpellService } from './spell.service';

@Module({
  imports: [],
  controllers: [WebhookController],
  providers: [SpellService],
})
export class webhookModule {}
