import { Controller } from '@nestjs/common';
import ApplicationError from 'src/shared/errors/application.error';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateAuthorRequest } from '../../dtos/create-author.request.dto';
import { CreateAuthorService } from './create-author.service';

@Controller()
export class CreateAuthorController {
  constructor(private readonly createAuthorService: CreateAuthorService) {}

  @MessagePattern('user.created')
  async handle(@Payload() payload: CreateAuthorRequest) {
    try {
      return this.createAuthorService.execute(payload);
    } catch (error) {
      if (!(error instanceof ApplicationError)) {
        throw new ApplicationError({
          message: error.message,
          statusCode: error.statusCode,
          domain: 'CreateAuthorController',
          error,
        });
      }
      throw error;
    }
  }
}
