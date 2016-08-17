/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
  var arr = [];
  for (var i = s.length - 1; i >= 0; i--) {
    arr.push(s[i]);
  }
  return arr.join('');
};
