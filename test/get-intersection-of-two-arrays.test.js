const assert = require("assert");

const { getIntersectionOfTwoArrays } = require('../src/get-intersection-of-two-arrays');

assert.deepStrictEqual(getIntersectionOfTwoArrays([1,2,3,4,5,6], [4,5,6,7,8,9]), [4,5,6]);
assert.deepStrictEqual(getIntersectionOfTwoArrays([1,2,3,4,5,6], [7,8,9]), []);
