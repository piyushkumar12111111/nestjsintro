import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module'; //! main module of the application

async function bootstrap() {
  const app = await NestFactory.create(AppModule); //! depend on the app module 
  await app.listen(process.env.PORT ?? 3000);  //! listen to the port example 3000 

//  console.log(app)
}
bootstrap();
