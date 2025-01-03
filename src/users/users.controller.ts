import { Controller, Get, Post, Put, Delete, Param , Query , ParseIntPipe , DefaultValuePipe, Body , ValidationPipe} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUserParamsDto } from './dtos/get-user.dto';
import { UserService } from './providers/user.service';

@Controller('users') //! this is the route for the users controller name as users 
export class UsersController {

    constructor(

        private readonly userservice : UserService ,
    )
    {}

    @Get(':param') //! this is the route for the users controller name as users 
    public getUsers(@Param('param') param: GetUserParamsDto , @Query('query') query: string , @Query('page' ,new DefaultValuePipe(1) , ParseIntPipe) page: number): any {
       
        // console.log(param);
        // console.log(query);
        // console.log(typeof page);
        
        // return `Hello ${param} ${query}`;

        return this.userservice.findall( param, page);
    }

    @Post() //! this is the route for the users controller name as users 
    public createUser(@Body(new ValidationPipe()) createUserDto: CreateUserDto ): string {

        console.log(createUserDto);
        return createUserDto.firstName;
    }

    @Put() //! this is the route for the users controller name as users 
    public updateUser(name: string): string {
        return name;
    }

    @Delete() //! this is the route for the users controller name as users 
    public deleteUser(name: string): string {
        return name;
    }
}
