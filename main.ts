// @ts-ignore
import { App, Request, Response, bodyParser } from 'https://raw.githubusercontent.com/NMathar/deno-express/master/mod.ts';
// @ts-ignore
import { Config } from './config/config.ts';
// @ts-ignore
import { IndexRoute } from './routes/index.ts';
// @ts-ignore
import { CitiesRoutes } from './routes/cities.ts';


class Main {
  public app: App;
  public config: Config;

  // Routes
  private indexRoute: IndexRoute = new IndexRoute();
  private citiesRoutes: CitiesRoutes = new CitiesRoutes();

  constructor() {
    this.app = new App();
    this.config = new Config();
    this.configuration();
    this.routes();
  }

  private async configuration(): Promise<void> {
    this.app.use(bodyParser.json());

    this.app.use(async (req: Request, res: Response, next: Function) => {
      // request middleware
      next();
    });

    console.log(`Server listening on port ${this.config.port} \nPress CTRL+C to quit.`);
    await this.app.listen(parseInt(this.config.port, 10));
  }

  private routes(): void {
    this.indexRoute.routes(this.app);
    this.citiesRoutes.routes(this.app);
  }
}

export default new Main().app;
