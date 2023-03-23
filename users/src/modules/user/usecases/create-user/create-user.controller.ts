import ApplicationError from 'src/shared/errors/application.error';
import { User } from '@prisma/client';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserRequest } from '../../dtos/create-user.request.dto';
import { CreateUserService } from './create-user.service';

@Controller('/user/create')
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post()
  async handle(
    @Body() user: CreateUserRequest,
  ): Promise<Omit<User, 'password'>> {
    try {
      return await this.createUserService.execute(user);
    } catch (error) {
      console.error(error);
      if (!(error instanceof ApplicationError)) {
        throw new ApplicationError({
          message: error.message,
          statusCode: error.statusCode,
          domain: 'CreateUserController',
          error,
        });
      }
      throw error;
    }
  }
}
