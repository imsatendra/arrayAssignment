const assert = require("assert");

const { getDifferenceOfTwoArrays } = require('../src/get-difference-of-two-arrays');

assert.deepStrictEqual(getDifferenceOfTwoArrays([1,2,3,4,5,6,7,8,9], [1,2,3,4,5]), [6,7,8,9]);
assert.deepStrictEqual(getDifferenceOfTwoArrays([1,2,3,4,5], [1,2,3,4,5]), []);