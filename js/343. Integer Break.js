/**
 * link: https://leetcode.com/problems/integer-break/
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {debugger
  var num = 0;

  if (n === 2 || n === 3) {
    return n - 1;
  } else {
    var a = Math.floor(n / 3);
    var b = n % 3;

    if (b === 1) {
      a--;
      b = 4;
    } else if (b === 0) {
      b = 1;
    }
    return Math.pow(3, a) * b;
  }
};

var n = 10;

console.log(integerBreak(n));