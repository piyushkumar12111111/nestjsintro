import { Module, Post } from '@nestjs/common';
import { PostController } from './post.controller';    
import { PostService } from './post.service';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [PostController],
  providers: [ PostService],
  imports : [UsersModule, TypeOrmModule.forFeature([Post])]
  
})
export class PostModule {}
