/**
 * link: https://leetcode.com/problems/4sum/;
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  var final = [];
  if (nums.length < 4) return [];
  nums = nums.sort((a, b) => {
    return a - b;
  });

  var pre;
  for (var index = 0; index < nums.length - 3; index++) {
    var d = nums[index];
    if (pre === d) continue;
    var left = target - d;
    var arr = nums.slice(0);
    arr.splice(0, index + 1);
    var array = threeSum(arr, left);
    if (array.length) {
      while (array.length) {
        var b = array.pop();
        var c = [b[0], b[1], b[2], d];
        final.push(c);
      }
    }
    pre = d;
  }
  return final;
};

var threeSum = function(nums, target) {
  var array = [];
  var length = nums.length;
  var preNum;
  var obj = {};
  for (var i = 0; i < nums.length - 2; i++) {
    var d = nums[i];
    if (d === preNum) continue;
    preNum = d;
    var left = i + 1;
    var right = length - 1;
    while (left < right) {
      var count = d + nums[left] + nums[right];
      if (count > target) {
        right--;
      } else if (count < target) {
        left++;
      } else {
        var a = [d, nums[left], nums[right]];
        if (!obj[a]) {
          obj[a] = true;
          array.push(a);
        }
        left++;
      }
    }
  }

  return array;
};

var arr = [-3,-2,-1,0,0,1,2,3];
console.log(fourSum(arr, 0))
