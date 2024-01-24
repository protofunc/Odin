const convertToCelsius = function(temp) {
  // .toFixed rounds to the specified decimal point and returns a string.
  // pareFloat changes it back to a number.
  return parseFloat(((temp-32)*5/9).toFixed(1));
};

const convertToFahrenheit = function(temp) {
  return parseFloat(((temp*9/5)+32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
