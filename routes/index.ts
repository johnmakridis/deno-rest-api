// @ts-ignore
import { Router, Context } from 'https://deno.land/x/oak/mod.ts';


export class IndexRoute {

  public router: Router = new Router();

  constructor() {

    this.router.get('/', (ctx: Context) => {

      ctx.response.status = 200;
      ctx.response.body = { code: 200, status: 'OK' };

    });

  }
}
