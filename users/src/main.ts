import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { Partitioners } from 'kafkajs';
import { AppModule } from './app.module';
import kafkaClient from './shared/adapters/amqp/kafka/kafka.client';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: kafkaClient,
      consumer: {
        groupId: 'users',
      },
      producer: {
        createPartitioner: Partitioners.LegacyPartitioner,
      },
    },
  });

  await app.startAllMicroservices();
  await app.listen(process.env.MS_PORT || 3000);
}
bootstrap();
