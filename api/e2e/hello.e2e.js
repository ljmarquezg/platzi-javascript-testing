// eslint-disable-next-line import/no-extraneous-dependencies
const request = require('supertest');

const createApp = require('../src/app');

describe('Test app', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(() => {
    server.close();
  });

  describe('Test [GET] / ', () => {
    test('should return a hello world message', async () => {
      request(app)
        .get('/')
        .expect(200)
        .then((response) => {
          expect(response.text).toEqual('Hello World!');
        });
    });
  });
});
