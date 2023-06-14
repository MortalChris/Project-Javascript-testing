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


function caesarCipher(string, shiftFactor){
    const plain = "abcdefghijklmnopqrstuvwxyz";
    for(let i = 0; i <= shiftFactor; i++){
        const cipher = plain;
        const firstLetterCipher = cipher.charAt(0); //a
        const seperateCipher = cipher.slice(0); //bcdefghi...
        const newCipher = seperateCipher + firstLetterCipher; //bcdefghi...xyza
    }

}
module.exports = {capitalize: capitalize, reverseString: reverseString, calculator: calculator, caesarCipher: caesarCipher};