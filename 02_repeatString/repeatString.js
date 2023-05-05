const repeatString = function(string, repeatNum) {
  if (repeatNum < 0) { return 'ERROR' }

  let resultString = '';
  for (let i = 0; i < repeatNum; i++) {
    resultString += string;
  }
  
  return resultString;
};

// Do not edit below this line
module.exports = repeatString;
