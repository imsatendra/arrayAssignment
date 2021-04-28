const assert = require("assert");

const { countNumbersAboveThreshold } = require('../src/count-total-numbers-above-a-threshold');

assert.strictEqual(countNumbersAboveThreshold([1,2,3,4,5,6,7,8,9], 4), 5);
assert.strictEqual(countNumbersAboveThreshold([1,2,3,4,5,6,7,8,9], 1), 8);