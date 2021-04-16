const numbers = [1,2,3,4,5,6,7,8];

function getEvenNumbers(numbers) {
    const evenNumbers = [];
    numbers.forEach(number => {
        if(number%2 == 0) {
            evenNumbers.push(number);
        }
    })
    return evenNumbers;
}

console.log(getEvenNumbers(numbers));