import { Controller } from '@nestjs/common';
import { Ctx, MessagePattern, Payload } from '@nestjs/microservices';
import { KafkaMessageBroker } from './shared/messaging/kafka/kafka.service';

@Controller()
export class AppController {
  /* async onModuleInit() {
    this.kafka.subscribe('user.created', (message) => {
      console.log(message);
    });
  } */
}
