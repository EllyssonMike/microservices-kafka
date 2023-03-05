import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { prismaClient } from 'src/shared/database/prisma/client';
import { CreateUserRequest } from '../usecases/user/create-user/dtos/create-user.request.dto';

@Injectable()
export class UserRepository {
  async create({
    confirm_password: _confirm_password,
    ...user
  }: CreateUserRequest): Promise<Omit<User, 'password'>> {
    return await prismaClient.user.create({
      data: {
        ...user,
        profile: {
          create: {
            ...user.profile,
          },
        },
      },
      select: {
        id: true,
        name: true,
        last_name: true,
        username: true,
        email: true,
        profile: {
          select: {
            bio: true,
          },
        },
      },
    });
  }
}
