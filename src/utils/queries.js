export const createTodosTable = `
DROP TABLE IF EXISTS todos;
CREATE TABLE IF NOT EXISTS todos (
  id SERIAL PRIMARY KEY,
  todo_subject VARCHAR DEFAULT '',
  todo_description VARCHAR NOT NULL
  )
  `;

export const insertTodos = `
INSERT INTO todos(todo_subject, todo_description)
VALUES ('Todo App', 'Create a Todo App'),
      ('Online JS editor', 'Create an online JS editor for interview purpose')
`;

export const dropTodosTable = 'DROP TABLE todos';
