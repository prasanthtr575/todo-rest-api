import express from 'express';
import { testEnvironmentVariable } from '../settings';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => res
  .status(200)
  .json({ message: `Todo REST APIs | ${testEnvironmentVariable}` }));

export default indexRouter;
