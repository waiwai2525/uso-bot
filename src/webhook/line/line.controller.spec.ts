import { Test, TestingModule } from '@nestjs/testing';
import { LineController } from './line.controller';
import { LineService } from './line.service';

describe('LineController', () => {
  let lineController: LineController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LineController],
      providers: [LineService],
    }).compile();

    lineController = app.get<LineController>(LineController);
  });

  it('webhook()', () => {
    expect(lineController.webhook()).toBe('webhook');
  });
});
