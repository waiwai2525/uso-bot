import { Body, Controller, Get, Post } from '@nestjs/common';
import { LineService } from './line.service';
import { middleware, messagingApi, WebhookEvent } from '@line/bot-sdk';
const { MessagingApiClient } = messagingApi;

@Controller('webhook/line')
export class LineController {
  config = {
    channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.LINE_CHANNEL_SECRET,
  };

  constructor(private readonly lineService: LineService) {}

  // POST /webhook/line
  @Post()
  webhook(@Body() body: { events: WebhookEvent[] }) {
    const event: WebhookEvent = body.events[0];

    if (event.type !== 'message') return;
    if (event.message.type !== 'text') return;

    const message = event.message.text;
    console.log(message);

    const client = new MessagingApiClient({
      channelAccessToken: this.config.channelAccessToken,
    });

    client.replyMessage({
      replyToken: event.replyToken,
      messages: [{ type: 'text', text: 'うるせぇ！' }],
    });

    return;
  }
}
