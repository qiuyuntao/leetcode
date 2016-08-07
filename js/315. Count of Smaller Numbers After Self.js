/**
 * link: https://leetcode.com/problems/count-of-smaller-numbers-after-self/
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
  var array = [];
  var arr = [];
  var length = nums.length;
  var index = 0;
  for (var i = length - 1; i >= 0; i--) {
    var d = nums[i];
    index = binarySearch(arr, d);
    inserIndex = index;

    while (arr[inserIndex] === d) {
      inserIndex--;
    }
    if (index !== inserIndex) inserIndex++;
    arr.splice(index, 0, d);
    array.unshift(inserIndex);
  }
  return array;
};

function binarySearch(arr, val) {
  var high = arr.length - 1;
  var mid = 0;
  var low = 0;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] > val) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
}

var nums = [5,2,2,2,6,1];
console.log(countSmaller(nums));
