const assert = require("assert");

const { getEvenNumbers } = require('../src/get-even-numbers');

assert.deepStrictEqual(getEvenNumbers([1,2,3,4,5,6,7,8]),[2,4,6,8]);
assert.deepStrictEqual(getEvenNumbers([1,3,5,7,9,11]),[]);