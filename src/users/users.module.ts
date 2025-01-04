import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UserService } from './providers/user.service';
import { User } from './user.entity';

@Module({
  controllers: [UsersController],  //! this is the controller for the users module link to the users controller

  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService]  //!  this is used for internal sharing 
})
export class UsersModule {}
