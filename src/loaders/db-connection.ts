import { createConnection, Connection } from 'typeorm';
import User from '../entity/User';
import Server from './server'
class Database {
  private connection: Connection;
  connect = async () => {
    try {
      this.connection = await createConnection({
        type: 'mongodb',
        host: 'localhost',
        port: 27017,
        username: '',
        password: '',
        database: 'recordAppDb',
        entities: [User],
        synchronize: true,
        logging: false,
        useUnifiedTopology: true
      });
      console.log('Connected successfully')
      return this
    } catch (e) {
      console.log(e)
      console.log('Connecting to db failed');
      throw new Error(e)
    }
  };

  get getConnection() {
    return this.connection;
  }
}
export default new Database();
