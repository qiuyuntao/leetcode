/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  var permuteArray = [];

  search(nums, []);
  function search(nums, arr) {
    if (!nums.length) permuteArray.push(arr);
    for (var i = 0; i < nums.length; i++) {
      var data = nums[i];
      var array = nums.slice(0);
      var a = arr.slice(0);
      a.push(data);
      array.splice(i, 1);
      search(array, a);
    }
  }

  return permuteArray;
};

var nums = [1,2,3];

console.log(permute(nums));
