import { expect, server, BASE_URL } from './setup';

describe('Todo Controller test', () => {
  it('POST request', done => {
    server
      .post(`${BASE_URL}/`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal(
          'POST | Environment variable is coming across'
        );
        done();
      });
  });

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

  it('PUT request', done => {
    server
      .put(`${BASE_URL}/`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal(
          'PUT | Environment variable is coming across'
        );
        done();
      });
  });

  it('DELETE Request', done => {
    server
      .delete(`${BASE_URL}/`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal(
          'DELETE | Environment variable is coming across'
        );
        done();
      });
  });
});