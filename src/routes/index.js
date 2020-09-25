import express from 'express';
import { handlePostReq, handleGetReq, handleUpdateReq, handleDeleteReq } from '../controllers';

const indexRouter = express.Router();

indexRouter.post('/', handlePostReq);
indexRouter.get('/', handleGetReq);
indexRouter.put('/', handleUpdateReq);
indexRouter.delete('/', handleDeleteReq);

export default indexRouter;
