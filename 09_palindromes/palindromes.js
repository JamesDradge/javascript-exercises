const palindromes = function (word) {
    word = word.trim().toLowerCase().replace(/\W|_/g, '');

    let arrayWord = word.substring(0);
    for (let i = 0; i < (arrayWord.length/2); i++) {
        if (arrayWord[i] !== arrayWord[(arrayWord.length -i -1)]) {
            return false;
        } else {
            return true;
        }
    }
};

// Do not edit below this line
module.exports = palindromes;
