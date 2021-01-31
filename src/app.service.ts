import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello austin!';
  }

  createToDo(item:string){
    return 'create a todo'
  }
  getJsonData(): Object{
    return {msg: "i am in the service"}
  }
  getAnimal(): Object{
    return {msg: "animal"}
  }
}

