import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(@Inject('USERS_SERVICE') private client: ClientProxy){}

  async GetUserName(){
    const message = await this.client.send({cmd: 'users-get'}, '');
    return message;
  }

  async PostUserName(user){
    const message = await this.client.send({cmd: 'users-post'}, user);
    return message;
  }
}
