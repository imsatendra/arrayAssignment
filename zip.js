const array1 = [1,2,3,4,5];
const array2 = [6,7,8];

function zip(array1, array2) {
  const zippedArray = [];
  const length = array1.length < array2.length ? array1.length : array2.length;
  
  for(index = 0; index < length; index++) {
    zippedArray.push([array1[index], array2[index]]);
  }
  return zippedArray;
}

console.log(zip(array1, array2));