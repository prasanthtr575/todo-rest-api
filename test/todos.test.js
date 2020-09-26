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
});