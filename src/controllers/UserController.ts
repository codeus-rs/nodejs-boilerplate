import { Param, Get, JsonController } from 'routing-controllers';
import User from './../entity/User';

@JsonController('/user')
export default class UserController {
  @Get()
  public test() {
    console.log('test');
  }
}
