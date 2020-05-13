// @ts-ignore
import { Application, Context } from 'https://deno.land/x/oak/mod.ts';
// @ts-ignore
import { Config } from './config/config.ts';
// @ts-ignore
import { IndexRoute } from './routes/index.ts';
// @ts-ignore
import { CitiesRoutes } from './routes/cities.ts';


class App {
  public app: Application;
  public config: Config;

  // Routes
  private indexRoute: IndexRoute = new IndexRoute();
  private citiesRoutes: CitiesRoutes = new CitiesRoutes();

  constructor() {
    this.app = new Application();
    this.config = new Config();
    this.configuration();
    this.routes();
  }

  private async configuration(): Promise<void> {
    // Http Logger
    this.app.use(async (ctx: Context, next: Function) => {
      await next();
      const responseTime = ctx.response.headers.get('X-Response-Time');
      console.log(`${ctx.request.method} ${ctx.request.url.pathname} - ${responseTime}`);
    });

    // Http Timing
    this.app.use(async (ctx: Context, next: Function) => {
      const start = Date.now();
      await next();
      const ms = Date.now() - start;
      ctx.response.headers.set('X-Response-Time', `${ms}ms`);
    });


    console.log(`Server listening on port ${this.config.port} \nPress CTRL+C to quit.`);
    await this.app.listen(`${this.config.host}:${this.config.port}`);
  }

  private routes(): void {
    this.app.use(this.indexRoute.router.routes());
    this.app.use(this.citiesRoutes.router.routes());
  }
}

export default new App().app;
