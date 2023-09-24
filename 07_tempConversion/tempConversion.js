const convertToCelsius = function (F) {
  let result = [(F - 32) * 5] / 9;
  return Number.isInteger(result) ? result : Number(result.toFixed(1));
};

convertToCelsius();

const convertToFahrenheit = function (C) {
  let result = C * (9 / 5) + 32;
  return Number.isInteger(result) ? result : Number(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
