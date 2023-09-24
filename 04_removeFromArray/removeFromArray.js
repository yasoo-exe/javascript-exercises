const removeFromArray = function (arr, ...removeArgs) {
  let result = [];
  arr.forEach((x) => (!removeArgs.includes(x) ? result.push(x) : x));
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
