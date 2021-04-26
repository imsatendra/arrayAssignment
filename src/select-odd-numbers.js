const numbers=[1,2,3,4,5,6,7,8,9];

function getOddNumbers(numbers) {
 const oddnumbers=[];

 numbers.forEach(number => {
     if(number%2 != 0) {
         oddnumbers.push(number);
     }
 });

 return oddnumbers;
}

getOddNumbers(numbers);