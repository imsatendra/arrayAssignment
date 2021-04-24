const array1 = [1,2,3,4,5,6,7];
const array2 = [3,4,5,6,7];

function getDifferenceOfTwoArrays(array1, array2) {
    const differenceOfTwoArrays = [];
    array1.forEach(number => {
        if(!array2.includes(number)) {
            differenceOfTwoArrays.push(number);
        }
    })
    return differenceOfTwoArrays;
}

console.log(getDifferenceOfTwoArrays(array1, array2));