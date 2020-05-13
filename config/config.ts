// @ts-ignore
import { config } from 'https://deno.land/x/dotenv/mod.ts';

const env = config();

export class Config {
    public host: string;
    public port: string;

    constructor() {
        this.host = env.HOST;
        this.port = env.PORT;
    }
}
