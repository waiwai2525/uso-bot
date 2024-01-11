import { Body, Controller, Post } from '@nestjs/common';
import { LineService } from './line.service';
import { messagingApi, WebhookEvent } from '@line/bot-sdk';
const { MessagingApiClient } = messagingApi;
import { OpenAI } from 'openai';

@Controller('webhook/line')
export class LineController {
  config = {
    channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.LINE_CHANNEL_SECRET,
  };

  openAi: OpenAI = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  constructor(private readonly lineService: LineService) {}

  // POST /webhook/line
  @Post()
  webhook(@Body() body: { events: WebhookEvent[] }) {
    const event: WebhookEvent = body.events[0];

    if (event.type !== 'message') return;
    if (event.message.type !== 'text') return;

    const message = event.message.text;

    const completion = this.openAi.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
    });

    const client = new MessagingApiClient({
      channelAccessToken: this.config.channelAccessToken,
    });

    client.replyMessage({
      replyToken: event.replyToken,
      messages: [{ type: 'text', text: completion.data.choices[0].message }],
    });

    return;
  }
}
