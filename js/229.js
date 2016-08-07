/**
 * link: https://leetcode.com/problems/majority-element-ii/
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  nums = nums.sort();
  var obj = {};
  var l = nums.length / 3;
  var array = [];

  for (var i = 0; i < nums.length; i++) {
    var d = nums[i];
    if (obj[d] === 'ok') continue;
    if (!obj[d]) {
      obj[d] = 1;
    } else {
      obj[d]++;
    }

    if (obj[d] > l) {
      array.push(d);
      obj[d] = 'ok';
    }
  }

  return array;
};

var nums = [1, 1, 2, 2, 2, 3];
console.log(majorityElement(nums))