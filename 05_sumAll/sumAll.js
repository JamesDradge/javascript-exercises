const sumAll = function(num1, num2) {
    let startNumber;
    let endNumber;
    
    if (num1 > 0 && num2 > 0 && typeof num1 == "number" && typeof num2 == "number"){
        if (num1 < num2) {
            startNumber = num1;
            endNumber = num2;
        } else {
            startNumber = num2;
            endNumber = num1;
        }

        let sum = startNumber;
        while (startNumber < endNumber) {
            sum = sum + startNumber + 1;
            startNumber++;
        }
        return sum;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
