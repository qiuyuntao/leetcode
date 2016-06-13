/**
 * link: https://leetcode.com/problems/missing-number/
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  nums = nums.sort(function (a, b) {
    return a - b;
  });
  if (nums[0] !== 0 && nums[0] === 1) return 0;

  var n = nums[0];
  for (var i = 0; i < nums.length; i++) {
    if (n !== nums[i]) return n;
    n++;
  }
  if (nums[0] === 0) return nums[nums.length - 1] + 1;
  return nums[0] - 1;
};

var a = [45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14];

console.log(missingNumber(a));