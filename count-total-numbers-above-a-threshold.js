const numbers = [1,2,3,4,5,6,7,8,9];
const threshold = 4;

function countNumbersAboveThreshold(numbers,threshold) {
    let countOfNumbersAboveThreshold = 0;
    numbers.forEach(number => {
        if(number > threshold) {
            countOfNumbersAboveThreshold++;
        }
    })
    return countOfNumbersAboveThreshold;
}

console.log(countNumbersAboveThreshold(numbers,threshold));