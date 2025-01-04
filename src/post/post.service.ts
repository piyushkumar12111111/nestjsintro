import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
    
    constructor(){

        
    }

    public getAllPost(userid : string){


        return {


            "post id " : "221",
            "post_url" : "www.paytm.dev.in"
        };
    }
}
