/**
 * link: https://leetcode.com/problems/median-of-two-sorted-arrays/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var array = nums1.concat(nums2);
  array.sort((a, b) => {
    return a - b;
  });

  var n = array.length % 2;
  var a = Math.floor(array.length / 2) - 1;
  var nums;
  if (n === 0) {
    nums = (array[a] + array[a + 1]) / 2;
  } else {
    nums = array[a + 1];
  }
  return nums;
};