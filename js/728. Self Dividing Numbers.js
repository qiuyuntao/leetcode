/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  const arr = [];
  for (let i = left; i <= right; i++) {
      if (isDividingNumbers(i)) arr.push(i);
  }
  return arr;
};

function isDividingNumbers(num) {
  const string = num.toString();
  const length = string.length;
  for (let i = 0; i < length; i++) {
      const value = string[i];
      if (num % value !== 0) return false;
  }
  return true;
}