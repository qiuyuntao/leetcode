/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.replace(/\s/g, '' );
  if (!s.length) return true;
  if (!(/[a-z|A-Z|\d]+/g).test(s)) return true;
  s = s.match(/[a-z|A-Z|\d]+/g).join('')
  var middle = Math.floor(s.length / 2);
  var length = s.length - 1;
  var n = 0;

  while (n <= middle) {
    var left = s[n++];
    var right = s[length--];

    if (left === right) continue;
    var leftCode = left.charCodeAt();
    var rightCode = right.charCodeAt();

    if (leftCode < 65 || rightCode < 65) return false;
    if (Math.abs(leftCode - rightCode) !== 32) return false;
  }

  return true;
};

console.log(isPalindrome("0P"));
