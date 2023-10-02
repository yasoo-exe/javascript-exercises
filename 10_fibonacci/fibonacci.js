const fibonacci = function (n) {
  if (n < 0) {
    return "OOPS";
  }
  var i;
  var fib = [1, 1]; // Initialize array!

  for (i = 2; i <= n - 1; i++) {
    // Next fibonacci number = previous + one before previous
    // Translated to JavaScript:
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib[fib.length - 1];
};

//In this exercise, the Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc.

console.log(fibonacci(4));
// Do not edit below this line
module.exports = fibonacci;
