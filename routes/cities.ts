// @ts-ignore
import { Router, Context } from 'https://deno.land/x/oak/mod.ts';
// @ts-ignore
import { readJsonSync } from 'https://deno.land/std/fs/read_json.ts';
// @ts-ignore
import orderBy from 'https://deno.land/x/lodash/orderBy.js';


export class CitiesRoutes {

  public router: Router = new Router();

  constructor() {

    this.router.get('/cities', async (ctx: Context) => {

      try {

        let cities = await readJsonSync('./cities.json');
        cities = orderBy(cities, (city: any) => city.name);
        ctx.response.status = 200;
        ctx.response.body = { cities: cities };

      } catch (error) {

        ctx.response.status = 500;
        ctx.response.body = { msg: error.message };

      }

    });

  }
}
