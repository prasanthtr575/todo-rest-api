import { expect, server, BASE_URL } from './setup';

describe('Todo Controller test', () => {
  it('GET request', done => {
    server
      .get(`${BASE_URL}/`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal(
          'GET | Environment variable is coming across'
        );
        done();
      });
  });
});