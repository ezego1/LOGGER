import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import 'dotenv/config';
import { Logger } from '@nestjs/common';

const logger = new Logger('Main');

const microserviceOptions = {
  transport: Transport.TCP,
  options: {
    host: process.env.HOST,
    port: parseInt(process.env.PORT),
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    microserviceOptions,
  );
  app.listen().then(() => {
    logger.log(`Logger Microservice now listening....`);
  });
}
bootstrap();
