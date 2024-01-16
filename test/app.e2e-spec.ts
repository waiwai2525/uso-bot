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

  it('GET /webhook', () => {
    return request(app.getHttpServer())
      .get('/webhook')
      .expect(200)
      .expect('嘘を交えて。');
  });

  it('GET /webhook with payload', () => {
    return request(app.getHttpServer())
      .get('/webhook')
      .send({ text: '生成AIについて教えて。' })
      .expect(200)
      .expect('生成AIについて教えて。嘘を交えて。');
  });

  it('POST /webhook/line', () => {
    return request(app.getHttpServer())
      .post('/webhook/line')
      .expect(201)
      .expect('webhook');
  });
});
