/**
 * link: https://leetcode.com/problems/search-for-a-range/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  var head = -1;
  var tail = -1;

  var index = binarySearch(nums, target);
  var length = nums.length;

  if (index !== -1) {
    head = index;
    tail = index;
    var flag = false;
    while (!flag) {
      if (nums[head - 1] !== target
        && nums[tail + 1] !== target) {
          flag = true;
        }

      if (head > 0 && nums[head - 1] === target) head--;
      if (tail < length - 1 && nums[tail + 1] === target) tail++;
    }
  }

  return [head, tail];
};

function binarySearch(arr, val) {
  var low = 0;
  var high = arr.length - 1;
  var mid = 0;
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
  return -1;
}


var nums = [5, 7, 7, 8, 8, 10];
var target = 2;

console.log(searchRange(nums, target));
