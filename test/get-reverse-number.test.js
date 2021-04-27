const assert =require("assert");

const {  getReverseOfArray } = require('../src/get-reverse-numbers-in-array');

assert.deepStrictEqual(getReverseOfArray([1,2,3,4]), [4,3,2,1]);
assert.deepStrictEqual(getReverseOfArray([9,8,7,6,5,4,3,2,1,]), [1,2,3,4,5,6,7,8,9])