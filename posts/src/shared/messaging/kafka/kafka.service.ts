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

  async publish(topic: string, message: any) {
    const producer = this.producer();
    await producer.connect();
    await producer.send({
      topic,
      messages: [{ value: JSON.stringify(message) }],
    });
    await producer.disconnect();
  }

  async subscribe(topic: string, callback: (message: any) => void) {
    const consumer = this.consumer({ groupId: 'users' });
    await consumer.connect();
    await consumer.subscribe({ topic, fromBeginning: true });
    await consumer.run({
      eachMessage: async ({ message }) => {
        callback(JSON.parse(message.value.toString()));
      },
    });
  }
}
