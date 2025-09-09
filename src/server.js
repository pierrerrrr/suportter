// criando servidor 
import http from 'node:http';
import { jsonHeadler} from './middleware/jsonHandler.js';
import { routeHandler } from './middleware/routeHandler.js';

async function listener(res, req) {
    await jsonHeadler(res, req)
    routeHandler(res, req)
}

http.createServer(listener).listen(3333);