const assert = require("assert");

const { findGreatestNumber } = require('../src/get-greatest-number-in-array');

assert.strictEqual(findGreatestNumber([1,2,3,4,5,6]), 6);
assert.strictEqual(findGreatestNumber([9,7,8,5,6,3,2,1]), 9);