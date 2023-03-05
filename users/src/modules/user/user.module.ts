import { Module } from '@nestjs/common';
import { UserRepository } from 'src/app/repositories/user.repository';
import { KafkaMessageBroker } from 'src/shared/adapters/amqp/kafka/kafka.adapter';
import { CreateUserController } from './usecases/create-user/create-user.controller';
import { CreateUserService } from './usecases/create-user/create-user.service';

@Module({
  imports: [],
  controllers: [CreateUserController],
  providers: [UserRepository, CreateUserService, KafkaMessageBroker],
})
export class UserModule {}
