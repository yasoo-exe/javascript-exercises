const repeatString = function (str, num) {
  let repeated = "";
  if (num >= 0) {
    for (let i = 0; i < num; i++) {
      repeated += str;
    }
    return repeated;
  }
  return "ERROR";
};

console.log(repeatString("cat", 3));

// Do not edit below this line
module.exports = repeatString;
