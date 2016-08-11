/**
 * link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var pre;
  var count = 0;
  for (var i = 0; i < nums.length; i++) {
    var d = nums[i];
    if (pre === d) {
      continue;
    } else {
      nums[count++] = d;
      pre = d;
    }
  }
  return count;
};

var arr = [1, 1, 1, 2, 3, 4, 4, 5];

console.log(removeDuplicates(arr));
