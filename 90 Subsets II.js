/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsetsWithDup = function(nums) {
    nums.sort();
  var array = [[]];
  var obj = {};
  combine([], nums.slice(0), array, obj);

  return array;
};

function combine(arr, nums, array, obj) {
  while (nums.length) {
    var data = nums[0];
    var arr_1 = arr.slice(0);
    arr_1.push(data);
    if (obj[arr_1.toString()]) {
      nums.shift();
      continue;
    }
    obj[arr_1.toString()] = true;
    array.push(arr_1);
    nums.shift();
    combine(arr_1, nums.slice(0), array, obj);
  }
}
