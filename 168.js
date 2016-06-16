/**
 * link: https://leetcode.com/problems/excel-sheet-column-title/
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  while (n < 26) {
    n = parseInt(n / 26);
  }

  var b = n % 26;

  if (b > 0) {
    b = 64 + b;
    s += String.fromCharCode(b);
  } else {
    if (a === 1 && b === 0) return 'Z';
    s += 'Z';
  }

  return s;
};

console.log(convertToTitle(680));
