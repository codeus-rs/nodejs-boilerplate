import { Application } from 'express';
import { createExpressServer, Action } from 'routing-controllers';
import bodyParser from 'body-parser';
class Server {
  private app: Application;

  public init() {
    this.createServer();
    this.configureApp(this.app);
  }

  private configureApp(app: Application): void {
    app.set('port', 8123);
    app.use(bodyParser.json({ limit: '20mb' }));
    app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));
    app.listen(8123, () => {
      console.log(`App is running at http://localhost:8123`)
    })
  }
  private createServer(){
    this.app = createExpressServer({
      controllers: [__dirname + "/controllers/*.ts"],
      cors: true,
      authorizationChecker: async (action: Action) => {
        return true;
        // implement authorization check here; more info can be found in routing-controllers node package description
      },
      currentUserChecker: async (action: Action) => {
        return true;
        // implement getting user by his access token here; more info can be found in routing-controllers node package description
        // also this middleware should return user entity
      }
    });
  }
}

export default new Server();
