/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  var array = [];

  var arr_1 = [1];
  var arr_2 = [];
  var temp = 1;
  for (var i = 0; i < nums.length - 1; i++) {
    var data = nums[i];
    temp *= nums[i];
    arr_1.push(temp);
  }

  temp = 1;
  for (var j = nums.length - 1; j >= 1; j--) {
    temp *= nums[j];
    arr_2[j] = temp;
  }
  arr_2.shift();
  arr_2.push(1);
  console.log(arr_1, arr_2);
  for (var i = 0; i < nums.length; i++) {
    array.push(arr_1[i] * arr_2[i]);
  }

  return array;
};

console.log(productExceptSelf([1,2,3,4]))
// var a = [1, 2, 3, 4];
// console.log(a.slice(), a.splice(2, 1), a)
