/**
 * link: https://leetcode.com/problems/find-the-duplicate-number/
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  var obj = {};
  var a = 0;
  nums.forEach((d) => {
    if (!obj[d]) obj[d] = 0;
    obj[d]++;
    if (obj[d] > 1) a = d;
  });
};

var nums = [1, 1];

console.log(findDuplicate(nums))