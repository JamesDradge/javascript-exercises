const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
  const reducer = (previousValue, currentValue) =>  previousValue + currentValue;
  return a.reduce(reducer, 0);
};

const multiply = function(a) {
  const reducer = (previousValue, currentValue) => previousValue * currentValue;
  return a.reduce(reducer, 1);
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(a) {
	let fact = 1;
  for (a; a > 0; a--) {
    fact *= a;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
