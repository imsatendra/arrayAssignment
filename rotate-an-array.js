const array = [1,2,3,4,5];
const rotateFrom = 2;

function rotateOfAnArray(array, rotateFrom) {
    for(index = 0; index < rotateFrom; index++) {
        array.push(array.shift());
    }
    return array;
}

console.log(rotateOfAnArray(array, rotateFrom));

