const assert = require("assert");

const { countEvenNumbers } = require('../src/count-even-number-in-an-array');

assert.strictEqual(countEvenNumbers([1,2,3,4,5,6,7,8]), 4);