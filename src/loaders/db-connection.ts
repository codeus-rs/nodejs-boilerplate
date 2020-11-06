import { createConnection, Connection, useContainer } from "typeorm";
import { Container } from "typedi";
import Entities from "../entities";
import environment from "../config/environment";
import { DB_TYPE } from "../types/db_type";
class Database {
    private connection: Connection;
    connect = async () => {
        try {
            useContainer(Container);
            this.connection = await createConnection({
                type: (DB_TYPE as any)[environment.DB_TYPE],
                host: environment.DB_HOST,
                port: environment.DB_PORT,
                username: environment.DB_USERNAME,
                password: environment.DB_PASSWORD,
                database: environment.DB_DATABASE,
                entities: Entities,
                synchronize: true,
                logging: false,
                useUnifiedTopology: true,
            });
            console.log("Connected successfully");
            return this;
        } catch (e) {
            throw new Error(`Connecting to db failed: ${e.message}`);
        }
    };

    get getConnection() {
        return this.connection;
    }
}
export default new Database();
