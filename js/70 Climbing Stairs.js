/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  var arr = [];
  arr[0] = 1;
  arr[1] = 1;
  for (var i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
};

var n = 0;
console.log(climbStairs(n));


// 0 -> 1
// 1 -> 1
// 2 -> 2 = 0 + 1;
// 3 -> 3
// 4 -> 5
//   1, 1, 1, 1;
//   1, 2, 1;
//   1, 1, 2;
//   2, 1, 1;
//   2, 2
