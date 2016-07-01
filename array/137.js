/**
 * link: https://leetcode.com/problems/single-number-ii/
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var obj = {};
  var array = [];
  nums.sort();
  nums.forEach((d, index) => {
    if (!obj[d]) {
      array.push(d);
      obj[d] = 1;
    } else {
      if (obj[d] === 1) {
        array.pop();
      }
      obj[d]++;
    }
  });

  return array[0];
};

var nums = [2, 1, 1, 1, 3, 3, 3];
console.log(singleNumber(nums));