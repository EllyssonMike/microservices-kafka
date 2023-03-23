import { Module } from '@nestjs/common';
import { UserRepository } from 'src/app/repositories/user.repository';
import { KafkaModule } from 'src/shared/adapters/amqp/kafka/kafka.module';
import { CreateUserController } from './usecases/create-user/create-user.controller';
import { CreateUserService } from './usecases/create-user/create-user.service';

@Module({
  imports: [KafkaModule],
  controllers: [CreateUserController],
  providers: [UserRepository, CreateUserService],
})
export class UserModule {}
