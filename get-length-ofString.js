const names=["mary","had","a","little","lamb"];
function getLengthName(names){
    const nameslength=[];
    names.forEach(name=>{
        const length =name.length;
        nameslength.push(length);
    })
    return nameslength;
}
console.log(getLengthName(names));class