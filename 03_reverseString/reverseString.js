const reverseString = function(str) {

    // Replace spaces between words with hyphen
    str = str.replace(/ /g, "-");

    // Convert to array
    let arrayString = str.split('');

    //Reverse array
    arrayString = arrayString.reverse();

    // Convert back to string
    let reversedString = arrayString.toString();


    //remove array formatting
    reversedString = reversedString.replace(/,/g, "");
    reversedString = reversedString.replace(/ /g, "");

    //Add back in spaces between words
    reversedString = reversedString.replace(/-/g, " ");

    //Return final result
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
