import User from "../entities/User";
import { UserRepository } from "../repository/User.repository";
import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";

@Service()
export class UserService {

    // using constructor injection
    constructor(
        @InjectRepository()
        private readonly userRepository: UserRepository,
    ) {}

    public userExist(user: User): boolean {
        return true
        // return await this.userRepository.findByEmail(user.email) ? true : false;
    }

}