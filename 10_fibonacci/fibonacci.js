const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    let firstFib = 0;
    let secondFib = 1;

    while (num > 0) {
        let temp = secondFib;
        secondFib = firstFib + secondFib; 
        firstFib = temp; 
        num--;
    }
    return firstFib;
};

// Do not edit below this line
module.exports = fibonacci;


// > A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.

// ```javascript
// fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)
// fibonacci(6) // returns 8
// ```
