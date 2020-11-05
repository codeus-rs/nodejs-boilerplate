import { Get, JsonController } from 'routing-controllers';

@JsonController('/user')
export default class UserController {
  @Get()
  public test() {
    console.log('test');
  }
}
