import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import morgan = require('morgan');
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin:['http://localhost:4200'],
    optionsSuccessStatus: 200
  })
  app.use(morgan('dev'));
  app.useGlobalPipes(new ValidationPipe(
    { transform: true }
  ));
  await app.listen(3000);
}
bootstrap();
