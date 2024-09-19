const { generateManyBooks } = require('../fakes/books.fake');
const BooksService = require('./books.service');
/** Usamos faker.dev para generar datos aleatorios:
    https://faker.dev/
    1.- Instalamos la dependencia:
      npm install @faker-js/faker --save-dev
      yarn add @faker-js/faker --dev
    2.- Generamos un archivo en /fakes/books.fake.js e imporatmos todas las dependencias:
        import { faker } from '@faker-js/faker' or, if desiring a different locale
        import { fakerDE as faker } from '@faker-js/faker';
        const randomName = faker.person.fullName(); // Rowan Nikolaus
        const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
*/

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
    const fakeBooks = generateManyBooks(20);
    mockSpyGetAll.mockResolvedValue(fakeBooks);
    // Act
    const books = await service.getBooks({});
    console.log(books);
    // Assert
    expect(mockSpyGetAll).toHaveBeenCalledTimes(1);
    expect(mockSpyGetAll).toHaveBeenCalledWith('books', {});
    expect(books.length).toEqual(20);
  });

  test('should return a Harry Potter 3 as the first book name', async () => {
    // Arrange
    const fakeBooks = generateManyBooks(4);
    mockSpyGetAll.mockResolvedValue(fakeBooks);
    // Act
    const books = await service.getBooks({});
    console.log(books);
    // Assert
    expect(books[0].name).toEqual(fakeBooks[0].name);
  });
});
