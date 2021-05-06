function checkPrimeNumber(number) {
    if (number == 0 || number == 1) {
        return false;
    } else if (number == 2) {
        return true;
    }
    for (index = 2; index < number; index++) {
        if (number % index == 0) {
            return false;
        }
    }
    return true;
}

//console.log(checkPrimeNumber(89));

function getFirstThreePosition(position) {
    const numbers = [0,2,3];
    return numbers[position];
}

function getPositionAfter2(position) {
    let primeCount = 2;
    let number = 3;
    while (primeCount != position) {
        number += 2;
        if (checkPrimeNumber(number)) {
            primeCount++;
        }
    }
    return number;
}

function getPrimeNumber(position) {
    // console.time('time');
    return (position <= 2) ? getFirstThreePosition(position) : getPositionAfter2(position);
    // console.timeEnd('time'); 

}

console.log(getPrimeNumber(1));