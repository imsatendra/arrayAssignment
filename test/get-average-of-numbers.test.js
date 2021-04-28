const assert = require("assert");

const { getAverage } = require('../src/get-average-of-numbers');

assert.strictEqual(getAverage([1,2,3,4,5]), 3);
assert.strictEqual(getAverage([1,2,3,4,5,6,7,8,9]), 5);
