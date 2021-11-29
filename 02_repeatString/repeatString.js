const repeatString = function(string, num) {
    let repeatedString;
    if (num > 0) {
        repeatedString = string;
        for (i = 0; (i < num -1); i++){
            repeatedString += string;
        }
    } else if (num < 0) {
        repeatedString = "ERROR";
    } else {
        repeatedString = "";
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
