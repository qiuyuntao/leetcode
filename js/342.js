/**
 * link: https://leetcode.com/problems/power-of-four/
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
  var number = Math.log10(n) / Math.log10(4);
  if (number === parseInt(number)) return true;
  return false;
};