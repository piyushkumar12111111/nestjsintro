import { Injectable } from "@nestjs/common";
import { GetUserParamsDto } from "../dtos/get-user.dto";


@Injectable(   )
export class UserService {

    public findall(getuserparamsdot : GetUserParamsDto, limit : number, ){

        return [

            {
                firstname : "hello world",
                email : "ho@gmail.com"
            }
        ]
    }
  

    public findonebyid(id:  number){

        return {
            id:"1221",
            firstname : "hello world",
            email : "ho@gmail.com"
        };
    }
}