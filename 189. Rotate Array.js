/**
 * https://leetcode.com/problems/rotate-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  var length = nums.length
  if (k >= length) k = k % length
  if (length >= 1) {
    var arr = nums.splice(length - k, length)
    for (var i = arr.length - 1; i >= 0; i--) nums.unshift(arr[i])
  }
  return nums
};

var nums = [1,2,3, 4, 5, 6, 7]
var k = 3
console.log(rotate(nums, k))
