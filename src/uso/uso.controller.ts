import { Controller, Get } from '@nestjs/common';
import { UsoService } from './uso.service';

@Controller('uso')
export class UsoController {
  constructor(private readonly usoService: UsoService) {}

  // GET /uso/spell
  @Get('spell')
  generateSpell(): string {
    return this.usoService.generateSpell();
  }
}
