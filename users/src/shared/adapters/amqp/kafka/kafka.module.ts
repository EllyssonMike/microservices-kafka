import { Module } from '@nestjs/common';
import { KafkaMessageBroker } from './kafka.adapter';

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
