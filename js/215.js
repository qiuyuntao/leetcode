/**
 * link: https://leetcode.com/problems/kth-largest-element-in-an-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  nums = nums.sort((a, b) => {
    return b - a;
  });

  var array = [];
  nums.forEach((d) => {
    if (array.length) {
      if (array[array.length - 1] !== d) array.push(d);
    } else {
      array.push(d);
    }
  });
  return nums[k - 1];
};

/**
 * [2,1], 2 --> 1
 * [3,3,3,3,4,3,3,3,3], 9 --> 3
 * [3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6], 20 --> 2
 **/