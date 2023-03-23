import { Injectable } from '@nestjs/common';
import { AuthorRepository } from 'src/app/repositories/author.repository';
import { KafkaMessageBroker } from 'src/shared/messaging/kafka/kafka.service';
import { CreateAuthorRequest } from '../../dtos/create-author.request.dto';

@Injectable()
export class CreateAuthorService {
  constructor(
    private readonly kafka: KafkaMessageBroker,
    private readonly authorRepository: AuthorRepository,
  ) {}

  async execute(data: CreateAuthorRequest) {
    const authorCreated = await this.authorRepository.create({
      id: data.id,
      name: data.name,
      username: data.username,
      email: data.email,
    });
    console.info(`Autor ${data.name} foi criado.`);
    return authorCreated;
  }
}
