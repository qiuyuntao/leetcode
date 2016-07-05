/**
 * link: https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//   var count = 0;
//   for (var i = 0; i < nums.length; i++) {
//     for (var j = i + 1; j < nums.length; j++) {
//       count = nums[i] + nums[j];
//       if (count === target) return [i, j];
//     }
//   }
// };

var twoSum = function(nums, target) {
  var count = 0;
  var obj = {};
  for (var i = 0; i < nums.length; i++) {
    if (obj[nums[i]] === undefined) obj[nums[i]] = [];
    obj[nums[i]].push(i);
  }
  for (var j = 0; j < nums.length; j++) {
    var n = nums[j];
    var substractN = target - n;
    var arr = obj[substractN];
    if (arr !== undefined) {
      var first = arr[0];
      if (first === j && arr[1]) return arr;
      if (first !== j) return [j, first];
    }
  }
};

console.log(twoSum([3,2,4], 6));