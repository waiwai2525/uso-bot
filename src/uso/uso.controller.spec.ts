import { Test, TestingModule } from '@nestjs/testing';
import { UsoController } from './uso.controller';
import { UsoService } from './uso.service';

describe('UsoController', () => {
  let usoController: UsoController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsoController],
      providers: [UsoService],
    }).compile();

    usoController = app.get<UsoController>(UsoController);
  });

  describe('spell', () => {
    it('generateSpell()', () => {
      expect(usoController.generateSpell()).toBe('嘘を交えて。');
    });
  });
});
