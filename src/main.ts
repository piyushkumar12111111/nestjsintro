import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module'; //! main module of the application
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';
import { DocumentBuilder , SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); //! depend on the app module 

  app.useGlobalPipes(new ValidationPipe( {whitelist: true , forbidNonWhitelisted: true , transform: true} )); //! this is the global pipe for the application to validate the data in the body of the request


  const config = new DocumentBuilder().setTitle("Api testing paytm").setVersion('1').build();

  const document = SwaggerModule.createDocument(app,config);

  SwaggerModule.setup('api',app, document);


  await app.listen(process.env.PORT ?? 3000);  //! listen to the port example 3000 

//  console.log(app)
}
bootstrap();
