import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
    origin: ['https://9929-41-140-60-37.ngrok-free.app'], // Allow specific origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    credentials: true, // Include cookies if needed
  });

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(process.env.PORT ?? 3000);

  
}
bootstrap();
