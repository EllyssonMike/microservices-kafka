import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { Partitioners } from 'kafkajs';
import { AppModule } from './app.module';
import clientKafka from './shared/messaging/kafka/kafka.client';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: clientKafka,
      consumer: {
        groupId: 'posts',
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
