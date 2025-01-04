import { Module, Post } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostModule } from './post/post.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [],
      useFactory:  () => ({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'M@sk$9000!',
      database: 'nestjs_intro',
      entities: [User , Post],
      synchronize: true, // Set to false in production  //! do not use it in production mode 
    }),
  }),
    UsersModule,
    PostModule,
    TagsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
