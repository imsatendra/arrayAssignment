const numbers =[1,2,13,4,5,6];

function checkAscendingOrder(numbers) {
    let value = 0;
    return numbers.every(number => {
        if(number >= value) {
            value = number;
            return true;
        } else {
            return false;
        }
    })    
}

console.log(checkAscendingOrder(numbers));