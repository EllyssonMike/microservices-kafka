import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthorModule } from './app/usecases/author/author.module';
import { KafkaMessageBroker } from './shared/messaging/kafka/kafka.service';

@Module({
  imports: [AuthorModule],
  controllers: [AppController],
  providers: [KafkaMessageBroker],
})
export class AppModule {}
