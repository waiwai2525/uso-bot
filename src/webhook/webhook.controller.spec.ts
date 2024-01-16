import { Test, TestingModule } from '@nestjs/testing';
import { WebhookController } from './webhook.controller';
import { SpellService } from './spell.service';

describe('SpellController', () => {
  let webhookController: WebhookController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [WebhookController],
      providers: [SpellService],
    }).compile();

    webhookController = app.get<WebhookController>(WebhookController);
  });

  it('attachSpell()', () => {
    expect(webhookController.attachSpell({ text: undefined })).toBe(
      '嘘を交えて。',
    );

    expect(
      webhookController.attachSpell({ text: '生成AIについて教えて。' }),
    ).toBe('生成AIについて教えて。嘘を交えて。');
  });
});
