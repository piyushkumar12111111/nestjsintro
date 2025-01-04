import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { get } from 'http';
import { CreatePostDto } from './dtos/createpost.dto';

@Controller('post')
export class PostController {

    constructor(
        private readonly postService: PostService
    ) {}


    @Get()
    public getPosts(@Param('userid') userid : string    ){

       
        return  this.postService.getAllPost(userid);
    }


    @Post() 
    public createPost(@Body() createpostdto: CreatePostDto) {
        // Implement the logic for creating a post here
    }
}
