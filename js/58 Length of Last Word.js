/**
 * link: https://leetcode.com/problems/length-of-last-word/
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  var count = 0;
  var pre = 0;
  for (var i = 0; i < s.length; i++) {
    var d = s[i];
    if (s[i] !== ' ') {
      count++;
    } else {
      if (count !== 0) pre = count;
      count = 0;
    }
  };

  if (count === pre && count === 0) {
    return pre;
  } else if (count === 0 && pre !== 0) {
    return pre;
  } else {
    return count;
  }
};

var s = "Today is a nice day ";

console.log(lengthOfLastWord(s))
