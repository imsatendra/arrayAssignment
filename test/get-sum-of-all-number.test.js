const assert = require("assert");

const { getSumOfAllNumbersInArray } = require('../src/get-sum-of-all-number');

assert.strictEqual(getSumOfAllNumbersInArray([1,2,3,4,5]), 15);
assert.strictEqual(getSumOfAllNumbersInArray([0,1,2,3,4,5]),15);