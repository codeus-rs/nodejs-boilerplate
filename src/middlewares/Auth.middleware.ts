import jwt from "jsonwebtoken";
import { UserService } from "../services";
import { User } from "../entities";
import { Inject, Service } from "typedi";
import environment from "../config/environment";

@Service()
class Auth {
    @Inject()
    private userService: UserService;

    authenticate = (token: string): boolean => {
        try {
            if (!this.checkTokenType(token)) return false;
            this.decodeToken(token);
            return true;
        } catch (e) {
            return false;
        }
    };

    currentUser = (token: string): Promise<User | undefined> => {
        const { id } = JSON.parse(token);
        return this.userService.getById(id);
    };

    checkTokenType = (token: string): boolean => token.split(" ")[0] === environment.TOKEN_TYPE;

    decodeToken = (token: string) => jwt.verify(token, environment.JWT_SECRET_KEY);
}
export default new Auth();
