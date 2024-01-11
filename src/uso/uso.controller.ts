import { Controller, Get } from '@nestjs/common';
import { UsoService } from './uso.service';

@Controller('uso')
export class UsoController {
  constructor(private readonly usoService: UsoService) {}

  // GET /uso
  @Get()
  getItems(): string {
    return this.usoService.generateSpell();
  }
}
