const assert = require("assert");

const { zip } = require('../src/zip');

assert.deepStrictEqual(zip([1,2,3,4,5], [6,7,8]), [[1,6],[2,7],[3,8]]);
assert.deepStrictEqual(zip([1,2,3,4,],[1,2,3,4,5,6]), [[1,1],[2,2],[3,3],[4,4]]);