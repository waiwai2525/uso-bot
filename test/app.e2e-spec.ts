import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('GET /', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('GET /uso/spell', () => {
    return request(app.getHttpServer())
      .get('/uso/spell')
      .expect(200)
      .expect('嘘を交えて。');
  });

  it('GET /uso/spell with payload', () => {
    return request(app.getHttpServer())
      .get('/uso/spell')
      .send({ text: '生成AIについて教えて。' })
      .expect(200)
      .expect('生成AIについて教えて。嘘を交えて。');
  });
});
