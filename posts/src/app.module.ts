import { Module } from '@nestjs/common';
import { AuthorModule } from './modules/authors/author.module';
import { KafkaMessageBroker } from './shared/messaging/kafka/kafka.service';

@Module({
  imports: [AuthorModule],
  controllers: [],
  providers: [KafkaMessageBroker],
})
export class AppModule {}
