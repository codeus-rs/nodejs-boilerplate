import { Service } from "typedi";
import { Repository, EntityRepository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";
import User from "../entities/User";

@Service()
@EntityRepository(User)
export class UserRepository extends Repository<User> {
    
    public findByEmail(email: string) {
        return this.findOne({ email });
    }
    
}