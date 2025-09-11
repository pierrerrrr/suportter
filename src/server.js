// criando servidor 
import http from 'node:http';
import { jsonHandler} from './middleware/jsonHandler.js';
import { routeHandler } from './middleware/routeHandler.js';

async function listener(res, req) {
    await jsonHandler(res, req)
    routeHandler(res, req)
}

http.createServer(listener).listen(3333);