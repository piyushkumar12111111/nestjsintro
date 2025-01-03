import { Controller, Get, Param } from '@nestjs/common';
import { PostService } from './post.service';
import { get } from 'http';

@Controller('post')
export class PostController {

    constructor(
        private readonly postService: PostService
    ) {}


    @Get()
    public getPosts(@Param('userid') userid : string    ){

       
        return  this.postService.getAllPost(userid);
    }
}
