const leapYears = function (year) {
  if (year % 100 === 0 && year % 400 === 0 && year % 4 === 0) {
    return true;
  }
  if (year % 100 === 0 && year % 400 !== 0 && year % 4 === 0) {
    return false;
  }
  if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  }
  return false;
};

console.log(leapYears(1997));

// Do not edit below this line
module.exports = leapYears;
