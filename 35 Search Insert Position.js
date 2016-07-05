/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function(nums, target) {
//   var length = nums.length;
//   var currentSubstract;

//   for (var i = 0; i < length; i++) {
//     var d = nums[i];
//     if (d === target) return i;
//     currentSubstract = d - target;
//     if (currentSubstract > 0) return i;
//   }
//   return nums.length;
// };

var searchInsert = function(nums, target) {
  var length = nums.length;
  var currentSubstract;
  var left = 0;
  var right = length - 1;
  var middle;
  var preMiddle = 0;

  if (nums[length - 1] < target) return length;
  if (nums[0] > target) return 0;

  while (left < right && preMiddle !== middle) {
    preMiddle = middle;
    if ((left + right) % 2 === 0) {
      middle = (left + right) / 2;
    } else {
      middle = parseInt((left + right) / 2) + 1;
    }
    if (nums[middle] === target) return middle;
    if (nums[middle] > target) {
      right = middle;
    } else {
      left = middle;
    }
  }

  return middle;
};

var arr = [1,3];

console.log(searchInsert(arr, 2));

/**
[1,3,5,6], 5 → 2
[1,3,5,6], 2 → 1
[1,3,5,6], 7 → 4
[1,3,5,6], 0 → 0
 */
