const words = ["mary","had","a","little","lamb"];

function getLengthOfStrings(words){
    const wordsLength = [];
    words.forEach(name => {
        const length = name.length;
        wordsLength.push(length);
    })
    return wordsLength;
}

console.log(getLengthOfStrings(words));