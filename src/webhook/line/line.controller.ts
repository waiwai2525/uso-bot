import { Body, Controller, Get, Post } from '@nestjs/common';
import { LineService } from './line.service';
import { middleware, messagingApi, WebhookEvent } from '@line/bot-sdk';

@Controller('webhook/line')
export class LineController {
  constructor(private readonly lineService: LineService) {}

  // POST /webhook/line
  @Post()
  webhook(@Body() body: { events: WebhookEvent[] }): string {
    const event: WebhookEvent = body.events[0];

    console.log(event);
    return 'webhook';
  }
}
