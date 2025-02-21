const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
  return a - b;
};

const sum = function(array) {
	let total = 0;
  for (const element of array) { 
    total += element;
  }
  return total;
};

const multiply = function(array) {
  let total = 1;
  for (const element of array) {
    total *= element;
  }
  return total;
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(number) {
  let result = 1
  for (let i=1; i<=number; i++) {
    result *= i;
  }
  return result;
	
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
