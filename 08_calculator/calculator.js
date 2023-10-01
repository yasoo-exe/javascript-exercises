const add = function () {
  return Array.from(arguments).reduce((acc, curr) => {
    return (acc += curr);
  }, 0);
};

const subtract = function () {
  return Array.from(arguments).reduce((acc, curr) => {
    return (acc -= curr);
  });
};

const sum = function () {
  return Array.from(...arguments).reduce((acc, curr) => {
    return (acc += curr);
  }, 0);
};

const multiply = function () {
  return Array.from(...arguments).reduce((acc, curr) => {
    return (acc *= curr);
  }, 1);
};

const power = function () {
  return Array.from(arguments).reduce((acc, curr) => {
    return acc ** curr;
  });
};

const factorial = function (arg) {
  if (arg === 0 || arg === 1) {
    return 1;
  } else {
    return arg * factorial(arg - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
