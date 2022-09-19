import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/posts/health')
  health(): string {
    return this.appService.health();
  }

  @Get('/posts/:id')
  getPostById(@Param('id') id: number) {
    const post = this.appService.getPostById(id);
    if (!post) return { error: `No post by id (${id})` };
    return this.appService.getPostById(id);
  }
}
