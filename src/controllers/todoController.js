import Model from '../models/model';

const todoModel = new Model('todos');

export const getTodos = async (req, res) => {
    try {
        const data = await todoModel.select('id,todo_subject,todo_description');
        res.status(200).json({todos: data.rows});
    } catch(err) {
        res.status(200).json({ todos: err.stack })
    }
};

export const addTodo = async (req, res) => {
    const { todo_subject, todo_description } = req.body;
    const columns = 'todo_subject, todo_description';
    const values = `'${todo_subject}', '${todo_description}'`;
    try {
      const data = await todoModel.insertWithReturn(columns, values);
      res.status(200).json({ todos: data.rows });
    } catch (err) {
      res.status(200).json({ todos: err.stack });
    }
  };