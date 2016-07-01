/**
 * link: https://leetcode.com/problems/roman-to-integer/
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
  var num = 0;
  var roman = {};

  roman['M'] = 1000;
  roman['D'] = 500;
  roman['C'] = 100;
  roman['L'] = 50;
  roman['X'] = 10;
  roman['V'] = 5;
  roman['I'] = 1;

  for (var i = s.length - 1; i >= 0; i--) {
    var string = s[i];
    var n = roman[string];
    var next = s[i - 1];
    var nextN = roman[next] ? roman[next] : 0;
    if (n <= nextN) { // 当前小于之后的数组，则相加
      num += n;
    } else { // 当前大与当后，要相减
      num += n - nextN;
      i--;
    }
  }

  return num;
};

var s = 'DCXXI';

console.log(romanToInt(s));
