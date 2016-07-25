/**
 * link: https://leetcode.com/problems/basic-calculator/
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  var left = s.match(/\(/g);
  var right = s.match(/\)/g);
  console.log(left, right);
  // return count;
};

console.log(calculate('1+(4-8)-(6-8)'));
