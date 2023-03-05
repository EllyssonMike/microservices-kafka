import { Module } from '@nestjs/common';
import { AuthorRepository } from 'src/app/repositories/author.repository';
import { CreateAuthorController } from './create-author/create-author.controller';
import { CreateAuthorService } from './create-author/create-author.service';

@Module({
  imports: [],
  controllers: [CreateAuthorController],
  providers: [AuthorRepository, CreateAuthorService],
})
export class AuthorModule {}
