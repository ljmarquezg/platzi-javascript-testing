/* eslint-disable import/no-extraneous-dependencies */
const mockSpyGetAll = jest.fn();
const request = require('supertest');
const createApp = require('../src/app');
const { generateManyBooks } = require('../src/fakes/books.fake');

jest.mock('../src/lib/mongo.lib', () => jest.fn().mockImplementation(
  () => (
    {
      getAll: mockSpyGetAll,
      create: () => {},
    }
  ),
));

describe('Test Book Endpoint', () => {
  let app = null;
  let server = null;

  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(() => {
    server.close();
  });

  describe('should return a list of books', () => {
    test('[GET] /books', () => {
      // Arrange
      const fakeBooks = generateManyBooks(5);
      mockSpyGetAll.mockResolvedValue(fakeBooks);
      // Act
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          // asert
          console.log(body);
          expect(body.length).toEqual(fakeBooks.length);
        });
    });
  });
});
