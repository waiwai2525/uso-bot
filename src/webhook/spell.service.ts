import { Injectable } from '@nestjs/common';

@Injectable()
export class SpellService {
  generateSpell(): string {
    return '嘘を交えて。';
  }

  attachSpell(text: string): string {
    return text + this.generateSpell();
  }
}
