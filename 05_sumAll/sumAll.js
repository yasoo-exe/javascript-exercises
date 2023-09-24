const sumAll = function (first, second) {
  if (
    first >= 0 &&
    second >= 0 &&
    Number.isInteger(first) &&
    Number.isInteger(second)
  ) {
    let tempArr = [first, second].sort((a, b) => a - b);
    console.log(tempArr);
    let result = 0;
    for (let i = tempArr[0]; i <= tempArr[1]; i++) {
      result += i;
    }
    return result;
  }
  return "ERROR";
};

console.log(sumAll("s", 4));

// Do not edit below this line
module.exports = sumAll;
