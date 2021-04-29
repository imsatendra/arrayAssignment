const assert = require("assert");

const { getEverySecondNumbers } = require('../src/select-every-second-numbers-in-array');
assert.deepStrictEqual(getEverySecondNumbers([1,2,3,4,5,6,7,8,9,0]), [2,4,6,8,0]);
assert.deepStrictEqual(getEverySecondNumbers([205,601,55,6,7,44,50]), [601,6,44]);
