import { Injectable } from '@nestjs/common';

@Injectable()
export class UsoService {
  generateSpell(): string {
    return '嘘を交えて。';
  }
}
