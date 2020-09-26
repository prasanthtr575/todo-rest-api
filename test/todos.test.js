import { expect, server, BASE_URL } from './setup';
describe('Todos', () => {
  it('get Todos test', done => {
    server
      .get(`${BASE_URL}/todo`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.todos).to.be.instanceOf(Array);
        res.body.todos.forEach(m => {
          expect(m).to.have.property('todo_subject');
          expect(m).to.have.property('todo_description');
        });
        done();
      });
  });

  it('posts Todos test', done => {
    const data = { todo_subject: 'New project', todo_description: 'Project description' };
    server
      .post(`${BASE_URL}/todo`)
      .send(data)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.todos).to.be.instanceOf(Array);
        res.body.todos.forEach(m => {
          expect(m).to.have.property('id');
          expect(m).to.have.property('todo_subject', data.todo_subject);
          expect(m).to.have.property('todo_description', data.todo_description);
        });
        done();
      });
  });
});