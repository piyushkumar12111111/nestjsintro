import { Controller, Get , Post , Put , Delete } from '@nestjs/common';

@Controller('users') //! this is the route for the users controller name as users 
export class UsersController {

    @Get() //! this is the route for the users controller name as users 
    public getUsers(): string {
        return 'Hello World';
    }

    @Post() //! this is the route for the users controller name as users 
    public createUser(name : string): string {
        return name;
    }

    @Put() //! this is the route for the users controller name as users 
    public updateUser(name : string): string {
        return name;
    }

    @Delete() //! this is the route for the users controller name as users 
    public deleteUser(name : string): string {
        return name;
    }
}
