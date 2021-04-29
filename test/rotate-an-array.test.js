const assert = require('assert');

const { rotateOfAnArray } = require('../src/rotate-an-array');

assert.deepStrictEqual(rotateOfAnArray([1,2,3,4,5], 2), [3,4,5,1,2]);
assert.deepStrictEqual(rotateOfAnArray([1,2,3,4,5,6,7,8,9], 8), [9,1,2,3,4,5,6,7,8]);