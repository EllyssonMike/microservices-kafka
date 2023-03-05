import { Injectable } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Injectable()
export class AppService {
  @MessagePattern('user.created')
  async userCreated(data: any) {
    console.log('user.created', data);
  }
}
