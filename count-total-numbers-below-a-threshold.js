const numbers = [1,2,3,4,5,6,7,8,9];
const threshold = 4;

function countNumbersBelowThreshold(numbers,threshold) {
    let countOfNumbersBelowThreshold = 0;
    numbers.forEach(number => {
        if(number < threshold) {
            countOfNumbersBelowThreshold++;
        }
    })
    return countOfNumbersBelowThreshold;
}

console.log(countNumbersBelowThreshold(numbers,threshold));