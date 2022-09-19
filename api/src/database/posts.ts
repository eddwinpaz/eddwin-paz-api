import posts from './data.json';
import { Post } from '../types/Post';

export const getPostById = (id: number) => {
  return posts.find((obj: Post) => obj.id == id);
};
