const reverseString = function(string) {
  let originalString = string.split('');
  let reversedString = [];
  for (let i = originalString.length; i >= 0; i--) {
    reversedString.push(originalString[i]);
  }
  return reversedString.join('');
};

// Do not edit below this line
module.exports = reverseString;
