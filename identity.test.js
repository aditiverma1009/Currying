const identityTest = require('/identity');

const value = 0;
test('This is a test case', () => {
  expect(identity(value).toBe(value));
});

test('Testing for all 0 strikes and hence the result must be 0', () => {
  expect(calculatedScore(inputAllZero).toBe(0));
});
