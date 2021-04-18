const numbers = [101,2,30,4,15,6,777,8];

function findGreatestNuber(numbers) {
    let greatestNumber = numbers[0];
    numbers.forEach(number => {
        if(greatestNumber <= number) {
            greatestNumber = number;
        }   
    });
    return greatestNumber;
}

console.log(findGreatestNuber(numbers));