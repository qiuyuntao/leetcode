/**
 * link: https://leetcode.com/problems/excel-sheet-column-title/
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  var s = '';
  var array = [];
  while (n >= 1) {
    var a = Math.floor(n) % 26;
    n = n / 26;
    if (a === 0) {
      array.push('Z');
      n--;
      continue;
    }
    array.push(String.fromCharCode(a + 64));
  }
  return array.reverse().join('');
};

var n = 701;
console.log(convertToTitle(n));

/**
 1 -> A
 2 -> B
 3 -> C
 ...
 26 -> Z
 27 -> AA
 28 -> AB
 */
