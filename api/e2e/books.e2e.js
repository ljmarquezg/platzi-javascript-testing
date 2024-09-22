/* eslint-disable import/no-extraneous-dependencies */
const request = require('supertest');
const { MongoClient } = require('mongodb');

const { config } = require('../src/config');
const createApp = require('../src/app');

const MONGO_URI = config.dbUrl;
const MONGO_DB = config.dbName;

describe('Test Book Endpoint', () => {
  let app = null;
  let server = null;
  let database = null;

  beforeAll(async () => {
    app = createApp();
    server = app.listen(3001);
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(MONGO_DB);
  });

  afterEach(async () => {
    await database.collection('books').deleteMany({});
  });

  afterAll(() => {
    server.close();
  });

  describe('should return a list of books', () => {
    test('[GET] /books', async () => {
      const seedData = await database.collection('books').insertMany([
        {
          name: 'Book 1',
          author: 'Author 1',
          year: 2020,
        },
        {
          name: 'Book 2',
          author: 'Author 2',
          year: 2022,
        },
      ]);

      await request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          // asert
          console.log(body);
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });
  });
});
