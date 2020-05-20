// @ts-ignore
import { App, Request, Response } from 'https://raw.githubusercontent.com/NMathar/deno-express/master/mod.ts';
// @ts-ignore
import { readJsonSync } from 'https://deno.land/std/fs/read_json.ts';
// @ts-ignore
import orderBy from 'https://deno.land/x/lodash/orderBy.js';


export class CitiesRoutes {

  public routes(app: App): void {

    app.get('/cities', async (req: Request, res: Response) => {
      try {

        let cities = await readJsonSync('./cities.json');
        cities = orderBy(cities, (city: any) => city.name);
        res.status = 200;
        return res.json({ cities: cities });

      } catch (error) {
        res.status = 500;
        return res.json({ msg: error.message });
      }
    });

  }

}
