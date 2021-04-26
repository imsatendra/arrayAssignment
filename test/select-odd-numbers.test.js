const assert = require("assert");

const { getOddNumbers } = require('../src/select-odd-numbers');

assert.deepStrictEqual(getOddNumbers([1,2,3,4,5]), [1,3,5]);
assert.deepStrictEqual(getOddNumbers([0,2,4]), []);