const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArray) {
	let sum = 0;
  numArray.forEach(num => {
    sum += num;
  });

  return sum;
};

const multiply = function(numArray) {
  let product = 1;
  numArray.forEach(num => {
    product *= num;
  });

  return product;
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
	if (num < 0) {
    return 'ERROR';
  } else if (num === 1 || num === 0) {
    return 1;
  }

  let factProduct = 1;
  for (let i = num; i > 0; i--) {
    factProduct *= i;
  }

  return factProduct;
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
