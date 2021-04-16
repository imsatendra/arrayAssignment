const numbers = [1,2,3,4,5,6,7,8,9];

function getEverySecondNumbers(number) {
    let index = 0;
    const everySecondNumbers = [];
numbers.forEach(number => {
    if(index%2 !=0 ) {
        everySecondNumbers.push(number)
        
    }
    index++;
    
})
return everySecondNumbers;
}

console.log(getEverySecondNumbers(numbers));