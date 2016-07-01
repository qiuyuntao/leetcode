/**
 * link: https://leetcode.com/problems/power-of-three/
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  var number = Math.log10(n) / Math.log10(3);
  if (number === parseInt(number)) return true;
  return false;
};