const assert = require("assert");

const { countNumbersBelowThreshold } = require('../src/count-total-numbers-below-a-threshold');

assert.strictEqual(countNumbersBelowThreshold([1,2,3,4,5,6,7,8,9], 9), 8);
assert.strictEqual(countNumbersBelowThreshold([1,2,3,4,5,6,7,0], 0), 0);