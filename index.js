function capitalize(unCapWord){
    const firstLetter = unCapWord.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = unCapWord.slice(1);
    const capitalizedWord = firstLetterCap + remainingLetters;
    return capitalizedWord;
}


function reverseString(string) {
    const splitString = string.split("");
    const reverseArray = splitString.reverse();
    const reversedString = reverseArray.join(""); 
    return reversedString; 
}

const calculator = {
    add(a,b){
        return a + b;
    },
    subtract(a,b){
        return a - b;
    },
    divide(a,b){
        return a / b;
    },
    multiply(a,b){
        return a * b;
    }
} 


function caesarCipher(string,shift){//
    let codeMsg = [];
    let stringify;
    for(let i = 0; i < string.length; i++){
        let numberfied = string.charCodeAt(i) - 0;
        let codified = String.fromCharCode(shift + numberfied);

        codeMsg.push(codified);
        stringify = codeMsg.join("");
    }
    return stringify;
};
module.exports = {capitalize: capitalize, reverseString: reverseString, calculator: calculator, caesarCipher: caesarCipher};