import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController]  //! this is the controller for the users module link to the users controller
})
export class UsersModule {}
