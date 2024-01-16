import { Test, TestingModule } from '@nestjs/testing';
import { LineController } from './line.controller';
import { SpellService } from '../spell.service';

describe('LineController', () => {
  let lineController: LineController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LineController],
      providers: [SpellService],
    }).compile();

    lineController = app.get<LineController>(LineController);
  });

  it('webhook()', () => {
    expect(lineController.webhook(undefined)).toBe('webhook');
  });
});
