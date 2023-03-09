const multiply = require('./multiply');

test('multiply 2*3 to be 6', () => {
  expect(multiply(2,3)).toBe(6);
});