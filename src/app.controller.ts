import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './dtos/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/users')
  saveUserData(@Body() body: User){
    var message;
    const pendingOperations = Array.from(new Array(5)).map((_, index) =>
    message = this.appService.PostUserName(body)
    );
    Promise.all(pendingOperations);
    return message;
  }

  @Get('/users')
  getUserData(){
    var message;
    const pendingOperations = Array.from(new Array(5)).map((_, index) =>
    message = this.appService.GetUserName()
    );
    Promise.all(pendingOperations);
    return message;
  }

}
