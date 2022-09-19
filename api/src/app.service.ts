import { Injectable } from '@nestjs/common';
import { getPostById } from './database/posts';
import { PostError } from './database/PostError';
import { Post } from './types/Post';

@Injectable()
export class AppService {
  health(): string {
    return 'App is running ok!';
  }

  getPostById(id: number): Post | PostError {
    return getPostById(id);
  }
}
