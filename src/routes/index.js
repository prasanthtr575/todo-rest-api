import express from 'express';
import { indexPage, getTodos, addTodo } from '../controllers';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/todo', getTodos);
indexRouter.post('/todo', addTodo);

export default indexRouter;
