function generateFibonacciReverseSeries(n) {
    let firstNumber = 0;
    let secondNumber = 1;
    const fibonacciSeries = [];
    fibonacciSeries.unshift(0);
    fibonacciSeries.unshift(1);
    for(index = 2; index <= n; index++) {
         let thirdNumber = firstNumber+secondNumber;
         fibonacciSeries.unshift(thirdNumber);
        firstNumber = secondNumber;
        secondNumber = thirdNumber;
       
    }
    return fibonacciSeries;
}
 
console.log(generateFibonacciReverseSeries(10));