const array = [1,2,7,4,9,10,5];

function getPartition(array, value) {
    const newArrayBelowTheValue = [];
    const newArrayAboveTheValue = [];
    array.forEach(number => {
        if(number <= value) {
            newArrayBelowTheValue.push(number);
        } else {
            newArrayAboveTheValue.push(number);
        }
    })
    return [newArrayBelowTheValue, newArrayAboveTheValue];  
}

console.log(getPartition(array, 5));