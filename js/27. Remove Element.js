/**
 * link: https://leetcode.com/problems/remove-element/
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function(nums, val) {
//   for (var i = 0; i < nums.length; i++) {
//     if (nums[i] === val) {
//       nums.splice(i, 1);
//       i--;
//     }
//   }
//   return nums;
// };

var removeElement = function(nums, val) {
  nums.sort((a, b) => {
    return a - b;
  });
  var length = nums.length;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > val) break;
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
      length--;
    }
  }
  return length;
};


var arr = [2, 2, 3, 4];
console.log(removeElement(arr, 2));
