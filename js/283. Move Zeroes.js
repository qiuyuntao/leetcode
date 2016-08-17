/**
 * link: https://leetcode.com/problems/move-zeroes/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  var count = 0;
  var arr = [];
  for (var i in nums) {
    var j = i;
    var d = nums[j];
    if (d === 0) {
      count++;
      arr.push(i);
    }
  }

  var count = arr.length;
  while (arr.length > 0) {
    var i = arr.pop();
    nums.splice(i, 1);
    nums.push(0);
  }
};
