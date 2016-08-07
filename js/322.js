/**
 * link: https://leetcode.com/problems/coin-change/
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if (!amount) return 0;
  var n = 0;
  var a = 0;
  var b = 0;
  var pre_n;
  coins = coins.sort((a, b) => {
    return a - b;
  });
  while (amount > 0) {
    var now = n;
    for (var i = coins.length - 1; i >= 0; i--) {
      var d = coins[i];
      if (amount / d >= 1) {
        a = amount;
        pre_n = n;
        n += Math.floor(amount / d);
        amount = amount % d;
        break;
      }
    }
    if (now === n) {
      amount
    }
  }
  return n;
};

var coins = [186,419,83,408];
var amount = 6249;

console.log(coinChange(coins, amount));
