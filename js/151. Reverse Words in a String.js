/**
 * link: https://leetcode.com/problems/reverse-words-in-a-string/
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {debugger
  var string = '';
  var word = '';
  for (var i in str) {
    var s = str[i];
    if (s === ' ') {
      if (!string.length) {
        string = word;
      } else if (word.length) {
        string = word + s + string;
      }
      word = '';
    } else {
      word += s;
    }
  }

  if (!string.length) {
    return word;
  } else if (string.length && word.length) {
    return `${word} ${string}`
  } else if (string.length && !word.length) {
    return string;
  }
};

var str = '1 ';
console.log(reverseWords(str), reverseWords(str).length);
