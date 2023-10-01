const palindromes = function (arg) {
  let temp = arg.match(/[\d\w]/gi);
  return temp.join("").toLowerCase() === temp.reverse().join("").toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
