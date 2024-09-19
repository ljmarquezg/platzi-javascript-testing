const math = require('./02-math');

test('adds 1 + 2 to equal 3', () => {
    expect(math.sum(1, 2)).toBe(3);
});

test("substract 3 - 2 to equal 1", () => {
    expect(math.substract(3, 2)).toBe(1);
});

test('multiply 2 * 3 to equal 6', () => {
    expect(math.multiply(2, 3)).toBe(6);
});

test('divide 6 / 3 to equal 2', () => {
    expect(math.divide(6, 3)).toBe(2);
});