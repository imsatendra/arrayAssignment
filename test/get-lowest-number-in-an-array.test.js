const assert = require("assert");

const { getLowestNumber } = require('../src/get-lowest-number-in-an-array');

assert.strictEqual(getLowestNumber([1,2,3,4,5,6]), 1);
assert.strictEqual(getLowestNumber([10,22,3,42,52,6]), 3);