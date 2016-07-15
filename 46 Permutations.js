/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  var array = [];
  var length = nums.length;
  var counts = 1;

  while (length > 0) {
    counts = counts * length--;
  }

  for (var i = 0; i < counts; i++) {
    var arr = [];

  }
};

var nums = [1, 2, 3, 4];

console.log(permute(nums));
