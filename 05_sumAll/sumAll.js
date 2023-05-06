const sumAll = function(num1, num2) {
  let smaller, larger;
  if (typeof num1 !== "number" || typeof num2 !== "number" || num1 < 0 || num2 < 0) {
    return 'ERROR';
  }

  if (num1 > num2) {
    larger = num1;
    smaller = num2;
  } else {
    larger = num2;
    smaller = num1;
  }

  let finalSum = 0;
  for (let i = smaller; i <= larger; i++) {
    finalSum += i;
  }

  return finalSum;
};
// Do not edit below this line
module.exports = sumAll;
