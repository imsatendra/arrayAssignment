const numbers = [11,222,51,7,5,7,100];

 function getLowestNumber(numbers) {
    let lowestNumber = numbers[0];
     numbers.forEach(number => {
             if(lowestNumber >= number) {
                 lowestNumber = number;
             }
     })
     return lowestNumber;
 }

 console.log(getLowestNumber(numbers));