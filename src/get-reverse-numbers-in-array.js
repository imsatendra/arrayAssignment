const numbers = [1,2,3,4,5,6,7,8];

function getReverseOfArray(number) {
    const reverseNumbers = [];
    numbers.forEach(number => {
        reverseNumbers.unshift(number);
    })
    return reverseNumbers;
}

console.log(getReverseOfArray(numbers));