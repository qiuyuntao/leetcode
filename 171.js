/**
 * link: https://leetcode.com/problems/excel-sheet-column-number/
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  var num = 0;
  var l = s.length - 1;
  for (var i = 0; i < l + 1; i++) {
    var d = s[i];
    var n = d.charCodeAt(0) - 64;
    num += Math.pow(26, l - i) * n;
  }

  return num;
};

var s = 'AZ';
console.log(titleToNumber(s));

/*
 A -> 1
 B -> 2
 C -> 3
 ...
 Z -> 26
 AA -> 27
 AB -> 28
 */