import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// this is a decorator that indicates this class is a controller
@Controller()
export class AppController {

  constructor(private readonly appService: AppService){}

  
  // this is also a decorator that specifies this method is the homepage
  // because there is nothing in the parenthesis 
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  // created a new route called '/hello'
  // whatever is returned from that method, will be displayed in the browser
  @Get('/hello')
  getNewHello(): string {
    return 'my own hello'
  }
  // when you return a string, the content type is html
  // but when you return an object, the content type is application/json
  // "Object" is a reserved word indicating return type
  // you cannot have two of the same keys with the same name in an object
  // EXAMPLE: {msg:"hello world", msg:"goodbye"}
  @Get('/hello-json')
  getHelloJson(): Object {
   return this.appService.getJsonData()
  }
  @Get('/get-animal')
  getAnimal(): Object {
    return this.appService.getAnimal()
  }
}
