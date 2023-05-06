const convertToCelsius = function(degF) {
  let degC = (degF - 32) * (5 / 9);
  if (Number.isInteger(degC)) {
    return degC;
  } else {
    degC = degC.toFixed(1);
    return parseFloat(degC);
  };
};

const convertToFahrenheit = function(degC) {
  let degF = (degC * (9 / 5) + 32);
  if (Number.isInteger(degF)) {
    return degF;
  } else {
    degF = degF.toFixed(1);
    return parseFloat(degF);
  };
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
