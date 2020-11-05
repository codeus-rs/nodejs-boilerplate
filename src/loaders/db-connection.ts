import { createConnection, Connection, useContainer } from 'typeorm';
import {Container} from "typedi";
import Entities from '../entities';
class Database {
  private connection: Connection;
  connect = async () => {
    try {
      useContainer(Container)
      this.connection = await createConnection({
        type: 'mongodb',
        host: 'localhost',
        port: 27017,
        username: '',
        password: '',
        database: 'recordAppDb',
        entities: Entities,
        synchronize: true,
        logging: false,
        useUnifiedTopology: true
      });
      console.log('Connected successfully')
      return this
    } catch (e) {
      throw new Error(`Connecting to db failed: ${e.message}`)
    }
  };

  get getConnection() {
    return this.connection;
  }
}
export default new Database();
