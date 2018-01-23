const identityfunc = arg => arg;
module.exports = identityfunc;

const arg = 1;
const result = identityfunc(arg);
console.log(result);
