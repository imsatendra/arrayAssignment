const number = "20345";

function extractDigits(number) {
    const numbers = [];
    for(index = 0; index < number.length; index++) {
        let digit = number.charAt(index);
        numbers.push(digit);
    }
    return numbers;
}

console.log(extractDigits(number));