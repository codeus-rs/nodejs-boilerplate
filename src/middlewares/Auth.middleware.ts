import jwt from "jsonwebtoken";
import { UserService } from "../services/User.service";
import { User } from "../entities";
import { Container } from "typedi";
const tokenType = "Bearer" // TODO add to env
const key = '1234tam'

class Auth {
    private userService: UserService;
    constructor(){
        this.userService = Container.get(UserService);
    }

    authenticate = (token: string): boolean => {
        try {
            if(!this.checkTokenType(token))
            return false
            this.decodeToken(token)
            return true
        } catch (e) {
            return false
        }
    }

    currentUser = (token: string): User => {
        const { id } = JSON.parse(token)
        return this.userService.getById(id); 
    }

    checkTokenType = (token: string): boolean => {
        return (token.split(" "))[0] == tokenType
    }
    decodeToken = (token: string) => {
        return jwt.verify(token, key)
    }
}
export default new Auth()