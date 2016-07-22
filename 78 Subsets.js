/**
 * link: https://leetcode.com/problems/subsets/
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
   var array = [[]];

   combine([], nums.slice(0), array);

   return array;
 };

 function combine(arr, nums, array) {
   while (nums.length) {
     var data = nums[0];
     var arr_1 = arr.slice(0);
     arr_1.push(data);
     array.push(arr_1);
     nums.shift();
     combine(arr_1, nums.slice(0), array);
   }
 }

var nums = [1, 2, 2];
console.log(subsets(nums));
