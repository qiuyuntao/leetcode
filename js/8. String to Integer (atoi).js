/**
 * link: https://leetcode.com/problems/string-to-integer-atoi/
 * @param {string} str
 * @return {number}
 * '   010' '-+123' '-123' 超出int
 */
var myAtoi = function(str) {
  var a = 1;
  str = str.replace(/^\s+|\s+$/g, '');
  if (str[0] === '-') {
    str = str.substr(1, str.length);
    a = -1;
  } else if (str[0] === '+') {
    str = str.substr(1, str.length);
  }
  var array = str.match(/^\d+/);

  if (array) {
    str = array[0];
  } else {
      return 0;
  }

  var n = 0;
  var l = str.length;
  var flag = true;
  for (var i = 0; i < l; i++) {
    var d = Number(str[i]);
    if (flag && d === 0) {
      continue;
    } else {
      flag = false;
    }
    n += Math.pow(10, l - i - 1) * d;
  }

  n = n * a;

  if (n > Math.pow(2, 31) - 1) {
    n = Math.pow(2, 31) - 1;
  } else if (n < -1 * Math.pow(2, 31)) {
    n = -1 * Math.pow(2, 31);
  }
  return n;
};

var s = "    010";

console.log(myAtoi(s));
