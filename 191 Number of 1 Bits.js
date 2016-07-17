/**
 * link: https://leetcode.com/problems/number-of-1-bits/
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  return converBinary(n);
};

function converBinary(n) {
  var index = 0;
  while (n > 0) {
    if (n % 2 === 1) index++;
    n = Math.floor(n / 2);
  }

  return index;
}


console.log(hammingWeight(0));
