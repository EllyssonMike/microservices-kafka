import { Injectable } from '@nestjs/common';
import { Kafka } from 'kafkajs';

@Injectable()
export class KafkaMessageBroker extends Kafka {
  constructor() {
    super({
      clientId: 'users',
      brokers: ['localhost:9092'],
    });
  }

  async publish<T = any>(topic: string, message: T) {
    const producer = this.producer();
    await producer.connect();
    await producer.send({
      topic,
      messages: [{ value: JSON.stringify(message) }],
    });
    await producer.disconnect();
  }
}
