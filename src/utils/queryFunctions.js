import { pool } from '../models/pool';
import {
  insertTodos,
  dropTodosTable,
  createTodosTable,
} from './queries';

export const executeQueryArray = async arr => new Promise(resolve => {
  const stop = arr.length;
  arr.forEach(async (q, index) => {
    await pool.query(q);
    if (index + 1 === stop) resolve();
  });
});

export const dropTables = () => executeQueryArray([ dropTodosTable ]);
export const createTables = () => executeQueryArray([ createTodosTable ]);
export const insertIntoTables = () => executeQueryArray([ insertTodos ]);