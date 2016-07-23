/**
 * link: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var obj = {};

  for (var i = 0; i < nums.length; i++) {
    var d = nums[i];
    if (!obj[d]) obj[d] = 0;
    if (obj[d] >= 2) {
      nums.splice(i, 1);
      i--;
    }
    obj[d]++;
  }

  return nums.length;
};

var nums = [1,1,1,1];
console.log(removeDuplicates(nums));
