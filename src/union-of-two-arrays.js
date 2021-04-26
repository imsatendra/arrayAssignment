const { getUniqueElements } = require('./get-unique-elements-in-array');

const array1 = [1,2,3,4,5];
const array2 = [3,4,5,6,7];

function getUnionOfTwoArrays(array1, array2) {
    return getUniqueElements(array1.concat(array2));
}

console.log(getUnionOfTwoArrays(array1, array2));