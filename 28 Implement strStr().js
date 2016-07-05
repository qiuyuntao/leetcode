/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (!needle.length) return 0;
  if (!haystack.length) return -1;
  if (haystack.length === needle.length) {
    if (haystack === needle) return 0;
    return -1
  }

  var currnt = 0;
  var count = needle.length;
  var array = [];
  for (var i = 0; i < haystack.length; i++) {
    var s = haystack[i];
    if (s === needle[0] && haystack.length - i >= needle.length) {
      array.push(0);
    }
    for (var j = 0; j < array.length; j++) {
      var c = array[j];
      if (c === -1) continue;
      if (s === needle[c]) {
        array[j]++;
        if (array[j] === count) return i - count + 1;
      } else {
        array.splice(j, 1);
        j--;
      }
    }
  }
  return -1;
};

var haystack = 'mississippi';
var needle = 'issip';

console.log(strStr(haystack, needle));


