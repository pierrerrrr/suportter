// arquivo que centraliza as rotas
import { tickets } from './tickets.js';
import { parseRoutPath } from '../utils/parseRoutePath.js';

export const routes = [...tickets].map((route) => ({
    ...route,
    path: parseRoutPath(route.path)
}))