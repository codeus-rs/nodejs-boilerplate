import { Service } from "typedi";
import { Repository, EntityRepository } from "typeorm";
import { User } from "../entities";

@Service()
@EntityRepository(User)
export class UserRepository extends Repository<User> {
    
    public findByEmail(email: string) {
        return this.findOne({ email });
    }
    
}