const identity = arg => arg;
module.exports = identity;

const arg = 1;
const result = identity(arg);
console.log(result);
