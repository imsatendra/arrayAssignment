const assert = require("assert");

const { checkAscendingOrder } = require('../src/check-ascending-order')

assert.strictEqual(checkAscendingOrder([1,2,3,4,5,6,7]), true);
assert.strictEqual(checkAscendingOrder([1,2,3,4,6,5,7]), false)