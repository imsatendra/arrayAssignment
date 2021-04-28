const assert = require("assert");

const { extractDigits } = require('../src/extract-digits-into-an-array');

assert.deepStrictEqual(extractDigits("2035"), ['2','0','3','5']);
assert.deepStrictEqual(extractDigits("203512"), ['2','0','3','5','1','2']);