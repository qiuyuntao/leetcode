/**
 * link: https://leetcode.com/problems/majority-element/
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  nums = nums.sort();
  var obj = {};
  var l = nums.length / 2;

  for (var i = 0; i < nums.length; i++) {
    var d = nums[i];
    if (!obj[d]) {
      obj[d] = 1;
    } else {
      obj[d]++;
    }

    if (obj[d] > l) return d;
  }
};

var nums = [1, 1, 2, 2, 2];
console.log(majorityElement(nums))