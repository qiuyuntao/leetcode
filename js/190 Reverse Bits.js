/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  var s = '';
  var count = 0;
  var index = 31;
  while (n > 0) {
    if (n % 2 !== 0) count += Math.pow(2, index);
    index--;
    n = Math.floor(n / 2);
  }
  return count;
};

var n = 43261596;
console.log(reverseBits(n));
