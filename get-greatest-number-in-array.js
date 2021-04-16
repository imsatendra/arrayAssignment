const numbers = [101,2000,300,4,15,600000,7,8];

function findGreatestNuber(numbers) {
    let greatestNumber = numbers[0];
    numbers.forEach(number => {
        for(index=1; index <numbers.length; index++){
            if(greatestNumber <= number)
            {
                greatestNumber=number;
            }
            
        }
        
    });
    return greatestNumber;

}
console.log(findGreatestNuber(numbers));