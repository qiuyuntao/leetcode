/**
 * link: https://leetcode.com/problems/palindrome-number/
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function(x) {
//   var n = Math.pow(2, 31) - 1;
//   if (x > n || x < 0) return false;
//   x = String(x);
//   x = x.split('');
//   var l = x.length;
//   var hl = parseInt(l / 2)
//   for (var i = 0; i < hl; i++) {
//     if (x[i] !== x[l - i - 1]) {
//       return false;
//     }
//   }

//   return true;
// };

var isPalindrome = function(x) {
  var n = Math.pow(2, 31) - 1;
  if (x > n || x < 0) return false;
  var l = String(x).length;
  var tail = 10;
  var head = Math.pow(10, l - 1);

  while (tail <= head) {
    var a = parseInt(x / head);
    var b = x % tail;
    if (a !== b) return false;
    x = x % head;
    x = parseInt(x / 10);
    tail = tail;
    head = head / 100;
  }

  return true;
};

console.log(isPalindrome(1234321));
