/**
 * link: https://leetcode.com/problems/happy-number/
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  var preData;
  var array = [];
  var obj = {};
  while (n !== 1) {
    if (!obj[n]) {
      obj[n] = true;
    } else {
      break;
    }
    array = converNumberToArray(n);
    if (preData === n) break;
    n = 0;
    array.forEach((d) => {
      d = Number(d);
      n += Math.pow(d, 2);
    });
  }

  if (n === 1) return true;
  return false;
};

function converNumberToArray(n) {
  var s = String(n);
  var array = s.split('');
  return array;
}

console.log(isHappy(18));
