const array1 = [1,2,3,4,5,6,7];
const array2 =[3,4,5,6,7,8,9];

function getIntersectionOfTwoArrays(array1, array2) {
    const intersectionOfTwoArrays = [];
    array1.forEach(number => {
        if(array2.includes(number)) {
            intersectionOfTwoArrays.push(number);
        }
    })
    return intersectionOfTwoArrays;
}

console.log(getIntersectionOfTwoArrays(array1, array2));