import { Controller, Get, Post, Put, Delete, Param , Query , ParseIntPipe , DefaultValuePipe, Body , ValidationPipe} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUserParamsDto } from './dtos/get-user.dto';
import { UserService } from './providers/user.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users') //! this is the route for the users controller name as users 
@ApiTags('users')
export class UsersController {

    constructor(

        private readonly userservice : UserService ,
    )
    {}
    @Get(':param') //! this is the route for the users controller name as users 
    @ApiQuery({ name: 'query', required: false })
    @ApiQuery({ name: 'page', required: false, type: Number })
    //@ApiOperation()
    @ApiResponse(
    {
        status: 200,
        description: 'Returns list of users',
        schema: {
            type: 'object',
            properties: {
                users: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            id: { type: 'number' },
                            firstName: { type: 'string' },
                            lastName: { type: 'string' },
                            email: { type: 'string' }
                        }
                    }
                },
                page: { type: 'number' },
                total: { type: 'number' }
            }
        }
    }
    )
    public getUsers(@Param('param') param: GetUserParamsDto , @Query('query') query: string , @Query('page' ,new DefaultValuePipe(1) , ParseIntPipe) page: number): any {
       
        // console.log(param);
        // console.log(query);
        // console.log(typeof page);
        
        // return `Hello ${param} ${query}`;

        return this.userservice.findOneById(0);
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
