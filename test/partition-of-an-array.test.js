const assert = require("assert");

const { getPartition } = require('../src/partition-of-an-array');

assert.deepStrictEqual(getPartition([1,2,3,4,5,6,7,8,9], 5), [[1,2,3,4,5],[6,7,8,9]]);
assert.deepStrictEqual(getPartition([1,2,3,4,5,6,7,8,9], 9), [[1,2,3,4,5,6,7,8,9],[]]);