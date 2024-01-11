import { Controller, Post } from '@nestjs/common';
import { LineService } from './line.service';

@Controller('webhook/line')
export class LineController {
  constructor(private readonly lineService: LineService) {}

  // POST /webhook/line
  @Post()
  webhook(): string {
    return 'webhook';
  }
}
