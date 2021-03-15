import {Router} from 'express';

import employeesRouter from './employees.routes';
import cors from 'cors'



const routes = Router();
routes.use(cors());
routes.use('/employees', employeesRouter);

export default routes;