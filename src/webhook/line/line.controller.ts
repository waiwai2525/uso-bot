import * as dotenv from 'dotenv';
dotenv.config();

import { Body, Controller, Post } from '@nestjs/common';
import { SpellService } from '../spell.service';
import { messagingApi, WebhookEvent } from '@line/bot-sdk';
import { AiService } from '../ai.service';
const { MessagingApiClient } = messagingApi;

@Controller('webhook/line')
export class LineController {
  config = {
    channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.LINE_CHANNEL_SECRET,
  };

  constructor(
    private readonly spellService: SpellService,
    private readonly aiService: AiService,
  ) {}

  sendReply(channelAccessToken: string, replyToken: string, text: string) {
    const client = new MessagingApiClient({
      channelAccessToken: channelAccessToken,
    });

    client.replyMessage({
      replyToken: replyToken,
      messages: [{ type: 'text', text: text }],
    });
  }

  // POST /webhook/line
  @Post()
  webhook(@Body() body: { events: WebhookEvent[] }) {
    const event: WebhookEvent = body.events[0];

    if (event.type !== 'message') return;
    if (event.message.type !== 'text') return;

    const message = this.spellService.attachSpell(event.message.text);

    this.aiService.chat(message).then((response) => {
      this.sendReply(
        this.config.channelAccessToken,
        event.replyToken,
        response,
      );
    });
  }
}
