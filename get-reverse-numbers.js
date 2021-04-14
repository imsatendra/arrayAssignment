const numbers= [1,2,3,4,5,6,7,8,9];
const length=numbers.length;
function getReverseNumber(numbers){
    const reversenumbers=[];
    numbers.forEach(number  => {
        if(length>=0) {
        reversenumbers[length-1]=number;
        length--;
        }
        
    });
    return reversenumbers;

}
console.log(getReverseNumber(numbers));
