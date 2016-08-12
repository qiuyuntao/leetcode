/**
 * https://leetcode.com/problems/reverse-integer/
 * @param {number} x
 * @return {number}
 * what the fuck, 需要考虑int类型溢出的情况 +-Math.pow(2, 31);
 */
var reverse = function(x) {
  var n = Math.pow(2, 31);
  x = String(x);
  var a = '';
  if (x[0] === '-') {
    a = '-';
    x = x.slice(1, x.length);
  }

  if (Number(x) > n) return 0;

  var array = x.split('');
  array.reverse();
  if (Number(array.join('')) > n) return 0;

  return Number(a + array.join(''));
};

var x = 1563847412;

console.log(reverse(x));
