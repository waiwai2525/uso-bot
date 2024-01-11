import { Test, TestingModule } from '@nestjs/testing';
import { SpellController } from './spell.controller';
import { SpellService } from './spell.service';

describe('SpellController', () => {
  let spellController: SpellController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SpellController],
      providers: [SpellService],
    }).compile();

    spellController = app.get<SpellController>(SpellController);
  });

  it('attachSpell()', () => {
    expect(spellController.attachSpell({ text: undefined })).toBe(
      '嘘を交えて。',
    );

    expect(
      spellController.attachSpell({ text: '生成AIについて教えて。' }),
    ).toBe('生成AIについて教えて。嘘を交えて。');
  });
});
