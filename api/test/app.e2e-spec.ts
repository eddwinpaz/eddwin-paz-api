import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';
import { AppController } from './../src/app.controller';

describe('Posts (e2e)', () => {
  let app: INestApplication;
  let appController: AppController;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    appController = app.get<AppController>(AppController);
    await app.init();
  });

  it('/GET health', () => {
    return request(app.getHttpServer())
      .get('/posts/health')
      .expect(200)
      .expect('App is running ok!');
  });

  it(`/GET posts id does not exist`, () => {
    return request(app.getHttpServer())
      .get('/posts/100001')
      .expect(200)
      .expect(appController.getPostById(100001));
  });

  it(`/GET posts id exists`, () => {
    return request(app.getHttpServer())
      .get('/posts/1')
      .expect(200)
      .expect(appController.getPostById(1));
  });

  afterAll(async () => {
    await app.close();
  });
});
