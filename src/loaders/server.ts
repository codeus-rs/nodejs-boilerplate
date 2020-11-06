import { Application } from 'express';
import { createExpressServer, Action } from 'routing-controllers';
import bodyParser from 'body-parser';
import path from 'path';
import Auth from './../middlewares/Auth.middleware'
import environment from './../config/environment'
class Server {
  private app: Application;

  public init() {
    this.createServer();
    this.configureApp(this.app);
  }

  private configureApp(app: Application): void {
    app.set('port', environment.PORT);
    app.use(bodyParser.json({ limit: '20mb' }));
    app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));
    app.listen(8123, () => {
      console.log(`App is running at http://localhost:${environment.PORT}`)
    })
  }
  private createServer(){
    this.app = createExpressServer({
      controllers: [path.join(__dirname + "/../" + "controllers/*.ts")],
      cors: true,
      authorizationChecker: async (action: Action) => {
        return Auth.authenticate(action.request.headers["authorization"]);
      },
      currentUserChecker: async (action: Action) => {
        return Auth.currentUser(action.request.headers["authorization"].split(" ")[1])
      }
    });
  }
}

export default new Server();
