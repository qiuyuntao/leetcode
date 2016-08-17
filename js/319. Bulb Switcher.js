/**
 * link: https://leetcode.com/problems/bulb-switcher/
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
  return n === 0 ? 0 : Math.floor(Math.sqrt(n));
};

var n = 5;

console.log(bulbSwitch(n));
