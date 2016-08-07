/**
 * link: https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var count = 0;
  var string = '';
  for (var i = 0; i < s.length; i++) {
    var d = s[i];
    if (string.indexOf(d) < 0) {
      string += d;
    } else {
      var index = string.indexOf(d);
      if (string.length > count) {
        count = string.length;
      }
      string = string.substr(index + 1, string.length - 1) + d;
    }
  }
  if (count && count > string.length) {
    return count;
  }
  return string.length;
};


var s = "cdd";

console.log(lengthOfLongestSubstring(s));
