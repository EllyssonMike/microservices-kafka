import { Injectable } from '@nestjs/common';
import { prismaClient } from 'src/shared/database/prisma/client';
import { CreateAuthorRequest } from '../../modules/authors/dtos/create-author.request.dto';

@Injectable()
export class AuthorRepository {
  async create(data: CreateAuthorRequest) {
    return prismaClient.author.create({
      data,
    });
  }
}
