const numbers = [1,2,3,4,5,6,7,8,9];
const threshold = 4
function countBelowNumbers(numbers, threshold) {
    let countAboveTheNumber=0;
    numbers.forEach(number => {
        if(number > threshold) {
            countAboveTheNumber++;
        }
    })
    return countAboveTheNumber;
}

console.log(countBelowNumbers(numbers,threshold));