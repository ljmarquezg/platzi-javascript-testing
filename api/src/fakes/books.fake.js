// eslint-disable-next-line import/no-extraneous-dependencies
const { faker } = require('@faker-js/faker');

const generateBook = () => (
  {
    _id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
  }
);

const generateManyBooks = (size) => {
  const booksLength = size || 10;
  const books = [];
  for (let i = 0; i < booksLength; i += 1) {
    books.push(generateBook());
  }
  return books;
};

module.exports = { generateBook, generateManyBooks };
