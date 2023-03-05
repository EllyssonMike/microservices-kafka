import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserRepository } from 'src/app/repositories/user.repository';
import { KafkaMessageBroker } from 'src/shared/adapters/amqp/kafka/kafka.adapter';
import { CreateUserRequest } from '../../dtos/create-user.request.dto';

@Injectable()
export class CreateUserService {
  constructor(
    private readonly repository: UserRepository,
    private readonly kafka: KafkaMessageBroker,
  ) {}
  async execute(data: CreateUserRequest): Promise<Omit<User, 'password'>> {
    const userCreated = await this.repository.create(data);
    await this.kafka.publish('user.created', userCreated);
    console.info(`Usuário ${data.name} foi criado.`);
    console.info(userCreated);
    return userCreated;
  }
}
