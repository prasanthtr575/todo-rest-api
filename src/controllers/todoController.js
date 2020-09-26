import Model from '../models/model';

const todoModel = new Model('todos');

export const getTodos = async (req, res) => {
    try {
        const data = await todoModel.select(['todo_subject', 'todo_description']);
        res.status(200).json({todos: data.rows});
    } catch(err) {
        res.status(200).json({ message: err.stack })
    }
};