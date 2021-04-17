const numbers = [1,2,3,4,5,6,7,8,9];
const threshold = 4
function countBelowNumbers(numbers, threshold) {
    let countBelowTheNumber=0;
    numbers.forEach(number => {
        if(number < threshold) {
            countBelowTheNumber++;
        }
    })
    return countBelowTheNumber;
}

console.log(countBelowNumbers(numbers,threshold));