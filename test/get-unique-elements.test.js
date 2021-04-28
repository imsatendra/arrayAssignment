const assert = require("assert");

const { getUniqueElements } = require('../src/get-unique-elements-in-array');

assert.deepStrictEqual(getUniqueElements([1,2,1,2,3,4,5,4,5,6,6]), [1,2,3,4,5,6]);
assert.deepStrictEqual(getUniqueElements([2,3,4,5,4,5,6,6]), [2,3,4,5,6]);