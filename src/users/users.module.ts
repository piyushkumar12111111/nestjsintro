import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './providers/user.service';

@Module({
  controllers: [UsersController],  //! this is the controller for the users module link to the users controller

  imports: [],
  providers: [UserService]  //!  this is used for internal sharing 
})
export class UsersModule {}
