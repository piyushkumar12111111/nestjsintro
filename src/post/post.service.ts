import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {


    public getAllPost(userid : string){


        return {


            "post id " : "221",
            "post_url" : "www.paytm.dev.in"
        };
    }
}
