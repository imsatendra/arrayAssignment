const numbers=[1,2,3,4,5,6,7,8,9];
function getCountOdd(numbers) {
    let count=0;
    numbers.forEach(number=>{
        if(number%2!=0) {
            count++;
        }

    })
    return count;
}
console.log(getCountOdd(numbers));