const array1 = [1,2,3,4,5];
const array2 = [2,3,4,5];

function checkSubset(array1, array2) {
    let isSubset = true;
    return array2.every(number => array1.includes(number))    
} 
  
console.log(checkSubset(array1, array2));