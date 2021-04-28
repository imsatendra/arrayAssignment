const assert = require("assert");

const { getLengthOfStrings } = require('../src/get-length-of-strings');

assert.deepStrictEqual(getLengthOfStrings(["mary","had","a","little","lamb"]), [4,3,1,6,4]);
assert.deepStrictEqual(getLengthOfStrings(["I","am","satendra","kumar"]), [1,2,8,5]);