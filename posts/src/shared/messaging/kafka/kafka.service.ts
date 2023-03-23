import { Injectable } from '@nestjs/common';
import { Kafka } from 'kafkajs';
import kafkaClient from './kafka.client';

@Injectable()
export class KafkaMessageBroker extends Kafka {
  constructor() {
    super(kafkaClient);
  }

  async publish(topic: string, message: any) {
    const producer = this.producer();
    await producer.connect();
    await producer.send({
      topic,
      messages: [{ value: JSON.stringify(message) }],
    });
    await producer.disconnect();
  }
}
