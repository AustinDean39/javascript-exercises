const removeFromArray = function(inputArray, ...values) {
  let resultArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    const val = inputArray[i];
    if (!values.includes(val)) { resultArray.push(val); }
  }

  return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
