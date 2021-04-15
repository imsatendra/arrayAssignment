let firstNumber = 0;
let secondNumber = 1;

function generateFibonacciReverseSeries(firstNumber,secondNumber) {
    const n = 10;
    const fibonacciSeries = [];
    for(index = 1; index <= n; index++) {
        let thirdNumber = firstNumber+secondNumber;
        fibonacciSeries.unshift(thirdNumber);
        firstNumber = secondNumber;
        secondNumber = thirdNumber;
    }
    return fibonacciSeries;
}
 
console.log(generateFibonacciReverseSeries(firstNumber,secondNumber));