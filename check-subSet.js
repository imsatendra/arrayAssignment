const array1 = [1,2,3,4,5];
const array2 =[2,3,4,5,];

function checkSubSet(array1, array2) {
    let isSubSet = true;
    array2.forEach(number => {
        if(array1.includes(number)) {
            return isSubSet;
        } else {
            isSubSet = false;
        }  
    })
    return isSubSet;
}

console.log(checkSubSet(array1, array2));