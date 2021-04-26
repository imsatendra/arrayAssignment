const numbers = [1,2,3,1,1,2,2,4,5,4];

function getIndexOfFirstOccurrence(numbers, numberToCheck) {
   return numbers.indexOf(numberToCheck);
}

console.log(getIndexOfFirstOccurrence(numbers, 4));