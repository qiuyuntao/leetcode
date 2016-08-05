/**
 * link: https://leetcode.com/problems/burst-balloons/
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
  var length = nums.length
  var left = nums[0]
  var right = nums[length - 1]
  var count = 0

  for (var i = 1; i < length - 1; i++) {
    var data = nums[i]
    count += left * data * nums[i + 1]
  }

  count += left * right
  count += right

  return count
}


var nums = [3,1,5,8]
console.log(maxCoins(nums))
