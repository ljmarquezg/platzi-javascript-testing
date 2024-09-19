const BooksService = require('./books.service');

const fakeBooks = [
  {
    _id: 1,
    name: 'Harry Potter',
  },
];

const mockSpyGetAll = jest.fn();

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(
  () => (
    {
      getAll: mockSpyGetAll,
      create: () => {},
    }
  ),
));
describe('Test BooksService', () => {
  let service;

  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  test('should return a list of books', async () => {
    // Arrange
    mockSpyGetAll.mockResolvedValue(fakeBooks);
    // Act
    const books = await service.getBooks({});
    console.log(books);
    // Assert
    expect(mockSpyGetAll).toHaveBeenCalledTimes(1);
    expect(mockSpyGetAll).toHaveBeenCalledWith('books', {});
    expect(books.length).toEqual(1);
  });

  test('should return a Harry Potter 3 as the first book name', async () => {
    // Arrange
    mockSpyGetAll.mockResolvedValue([
      {
        _id: 2,
        name: 'Harry Potter 3',
      },
    ]);
    const books = await service.getBooks({});
    // Act
    console.log(books);
    // Assert
    expect(books[0].name).toEqual('Harry Potter 3');
  });
});
