/**
 * link: https://leetcode.com/problems/contains-duplicate-ii/
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  if (!k) return false;
  var obj = {};
  var flag = false;

  nums.forEach((d, i) => {
    if (flag) return;
    if (!obj[d]) {
      obj[d] = [i];
    } else {
      obj[d].push(i);
      flag = isAtMostK(obj[d]);
    }
  });

  return flag;

  function isAtMostK(array) {
    var pre = array[0];
    for (var i = 1, l = array.length; i < l; i++) {
      var data = array[i];
      if (data - pre <= k) {
        return true;
      } else {
        pre = data;
        continue;
      }
    }
    return false;
  }
};

var nums = [1, 0, 1, 1];
var k = 1;

console.log(containsNearbyDuplicate(nums, k));
