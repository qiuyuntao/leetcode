/**
 * link: https://leetcode.com/problems/count-numbers-with-unique-digits/
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
  var count = 1;
  for (var i = 1; i <= n && i < 10; i++) {
    if (i === 1) {
      count = 10;
    } else {
      var account = getAccount(i);
      count = account + count;
    }
  }

  return count;
};

function getAccount(n) {
  var account = 1;
  var i = 0;
  while (i < n) {
    if (i === 0 || i === 1) {
      account *= 9;
    } else {
      account *= 10 - i;
    }
    i++
  }
  return account;
}

var n = 3;
console.log(countNumbersWithUniqueDigits(n));