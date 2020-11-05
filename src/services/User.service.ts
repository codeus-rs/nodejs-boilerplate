import { User } from "../entities";
import { UserRepository } from "../repository/User.repository";
import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";

@Service()
export class UserService {

    constructor(
        @InjectRepository()
        private readonly userRepository: UserRepository,
    ) {}

    public getById(id: string): User | null {
        return null
    }

}