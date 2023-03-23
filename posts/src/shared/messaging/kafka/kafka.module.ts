import { Module } from '@nestjs/common';
import { KafkaMessageBroker } from './kafka.service';

@Module({
  providers: [
    {
      provide: KafkaMessageBroker,
      useValue: new KafkaMessageBroker(),
    },
  ],
  exports: [KafkaMessageBroker],
})
export class KafkaModule {}
