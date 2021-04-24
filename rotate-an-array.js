const array = [1,2,3,4,5];
const indexValue = 2;

function rotateOfAnArray(array, indexValue){

    const newArray = [];
    for(index = indexValue; index < array.length; index++) {
        newArray.push(array[index]);
    }
    for(index = 0; index < indexValue; index++) {
        newArray.push(array[index]);
    }
    return newArray;
}

console.log(rotateOfAnArray(array, indexValue));
