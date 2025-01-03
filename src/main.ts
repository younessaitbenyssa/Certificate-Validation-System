import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
    origin: ['https://9929-41-140-60-37.ngrok-free.app'], // Allow specific origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    credentials: true, // Include cookies if needed
  });

  app.useGlobalPipes(new ValidationPipe())

  

  const config = new DocumentBuilder()
    .setTitle('Validation Certificat API')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);



  await app.listen(process.env.PORT ?? 3000);

  
}
bootstrap();
