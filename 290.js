/**
 * link: https://leetcode.com/problems/word-pattern/
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  var strArr = str.split(' ');
  var obj = {};
  if (strArr.length !== pattern.length) return false;
  for (var i = 0; i < pattern.length; i++) {
    var s = pattern[i];
    s = '1_' + s;
    if (!obj[s] && !obj[strArr[i]]) {
      obj[s] = strArr[i];
      obj[strArr[i]] = s;
    } else {
      if (obj[s] !== strArr[i]) return false;
    }
  }

  return true;
};

var pattern = "ab";
var str = "b c";

// pattern = "abba", str = "dog cat cat dog" should return true.
// pattern = "abba", str = "dog cat cat fish" should return false.
// pattern = "aaaa", str = "dog cat cat dog" should return false.
// pattern = "abba", str = "dog dog dog dog" should return false.

console.log(wordPattern(pattern, str));
