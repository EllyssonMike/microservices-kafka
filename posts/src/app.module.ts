import { Module } from '@nestjs/common';
import { AuthorModule } from './modules/authors/author.module';
import { KafkaModule } from './shared/messaging/kafka/kafka.module';

@Module({
  imports: [KafkaModule, AuthorModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
