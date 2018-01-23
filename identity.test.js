const identityTest = require('./identity');

const value = 0;
test('This is a test case to check if sent argument and recieved arguments are the same', () => {
  expect(identityTest(value).toBe(value));
});
