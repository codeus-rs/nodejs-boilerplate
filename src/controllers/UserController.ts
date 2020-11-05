import { Get, JsonController } from 'routing-controllers';
import { Container } from 'typedi';
import { UserService } from '../services';

@JsonController('/user')
export default class UserController {
  private userService: UserService
  constructor(){
    this.userService = Container.get(UserService)
  }
 
  @Get()
  public test() {
    return this.userService.getById("12t")
  }
}
