const assert = require("assert");

const { generateFibonacciReverseSeries } = require('../src/generate-fibonacci-reverse-series');

assert.deepStrictEqual(generateFibonacciReverseSeries(4), [3, 2, 1, 1, 0]);
assert.deepStrictEqual(generateFibonacciReverseSeries(6), [8, 5, 3, 2, 1, 1, 0]);