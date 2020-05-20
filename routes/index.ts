// @ts-ignore
import { App, Request, Response } from 'https://raw.githubusercontent.com/NMathar/deno-express/master/mod.ts';


export class IndexRoute {

  public routes(app: App): void {

    app.get('/', (req: Request, res: Response) => {
      return res.json({ msg: 'Hello ;)' });
    });

  }

}

