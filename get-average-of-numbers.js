const numbers = [1,2,3,4,5,6,7,8,9];

function getAverage(numbers) {
    let sum=0;
    numbers.forEach(number => {
        sum = sum + number;
        sum =sum+number;
     
    })
    return sum/2;   
}

console.log(getAverage(numbers));


