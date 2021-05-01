const assert = require("assert");

const { getIndexOfFirstOccurrence } = require('../src/get-first-position-of-a-specified-no.');

assert.strictEqual(getIndexOfFirstOccurrence([1,2,3,4,5,6,7,4,7,9], 4), 3);
assert.strictEqual(getIndexOfFirstOccurrence([1,2,3,4,5,6,7,4,7,9], 7), 6);
assert.strictEqual(getIndexOfFirstOccurrence([1,2,3,4,5,6,7,4,7,9], 10), -1);