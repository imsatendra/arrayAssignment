const numbers = [1,2,4,4,1,4,6,7,7,5,8];

function getUniqueElements(elements) {
    const uniqueElements = [];
    elements.forEach(element => {
        if(!uniqueElements.includes(element)) {
           uniqueElements.push(element); 
        }
    })
    return uniqueElements; 
}

console.log(getUniqueElements(numbers));

