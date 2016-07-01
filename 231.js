/**
 * link: https://leetcode.com/problems/power-of-two/
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  var number = Math.log2(n);
  if (number === parseInt(number)) return true;
  return false;
};