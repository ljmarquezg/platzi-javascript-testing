const BooksService = require('./books.service');

const fakeBooks = [
  {
    _id: 1,
    name: 'Harry Potter',
  },
];

const mockSpyGetAll = jest.fn();

const BooksServiceStub = {
  getAll: () => fakeBooks,

  create: () => {},
};

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => BooksServiceStub));
describe('Test BooksService', () => {
  let service;

  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  test('should return a list of books', async () => {
    // Arrange
    // Act
    const books = await service.getBooks({});
    console.log(books);
    // Assert
    expect(books.length).toEqual(1);
  });

  test('should return a Harry Potter as the first book name', async () => {
    const books = await service.getBooks({});
    console.log(books);
    expect(books[0].name).toEqual('Harry Potter');
  });
});
