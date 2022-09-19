import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Post } from './types/Post';
import { PostError } from './database/PostError';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('posts', () => {
    it('should return "App is running ok!"', () => {
      expect(appController.health()).toEqual('App is running ok!');
    });

    it('getPostById: should return proper object by ID', () => {
      const expected: Post = {
        userId: 1,
        id: 1,
        title:
          'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
      };

      const response = appController.getPostById(1);
      expect(response).toEqual(expected);
    });

    it('getPostById: id does not exists', () => {
      const expected: PostError = { error: 'No post by id (11110)' };
      const response = appController.getPostById(11110);
      expect(response).toEqual(expected);
    });
  });
});
