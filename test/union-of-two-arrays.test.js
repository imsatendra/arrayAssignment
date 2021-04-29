const assert = require("assert");

const { getUnionOfTwoArrays } = require('../src/union-of-two-arrays');

assert.deepStrictEqual(getUnionOfTwoArrays([1,2,3,4,5,6], [4,5,6,7,8,9,0]), [1,2,3,4,5,6,7,8,9,0]);
assert.deepStrictEqual(getUnionOfTwoArrays([11,2,13,14,10,5,6], [1,2,3,4]), [11,2,13,14,10,5,6,1,3,4]);