const numbers = [1,2,3,4,5,6,7,8,9];

function getReverseNumber(numbers){
    let length = numbers.length;
    const reverseNumbers = [];
    numbers.forEach(number => {
        if(length >= 0) {
            reverseNumbers[length-1] = number;
            length--;
        } 
    });
    return reverseNumbers;
}

console.log(getReverseNumber(numbers));
