/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  var final = [];
  if (nums.length < 4) return [];
  nums = nums.sort((a, b) => {
    return a - b;
  });

  var pre;
  for (var index = 0; index < nums.length - 3; index++) {
    var d = nums[index];
    if (pre === d) continue;
    var left = target - d;
    var arr = nums.slice(0);
    arr.splice(0, index + 1);
    var array = threeSum(arr, left);
    if (array.length) {
      while (array.length) {
        var b = array.pop();
        var c = [b[0], b[1], b[2], d];
        final.push(c);
      }
    }
    pre = d;
  }
  return final;
};

var threeSum = function(nums, target) {
  var final = [];
  if (nums.length < 3) return [];
  nums = nums.sort((a, b) => {
    return a - b;
  });

  var pre;
  for (var index = 0; index < nums.length - 2; index++) {
    var d = nums[index];
    if (pre === d) continue;
    var left = target - d;
    var arr = nums.slice(0);
    arr.splice(0, index + 1);
    var array = twoSum(arr, left);
    if (array.length) {
      while (array.length) {
        var a = [];
        var b = array.pop();
        var c = [b[0], b[1], d];
        final.push(c);
      }
    }
    pre = d;
  }

  return final;
};

var twoSum = function(nums, target) {
  var obj = {};
  var o = {};
  var array = [];
  for (var i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) obj[nums[i]] = [];
    obj[nums[i]].push(i);
  }

  var pre;
  for (var j = 0; j < nums.length; j++) {
    var n = nums[j];
    if (o[n]) continue;
    o[n] = true;
    if (pre === n) continue;
    var substractN = target - n;
    if (o[substractN] && n !== substractN) continue;
    o[substractN] = true;
    var arr = obj[substractN];
    if (arr) { // 存在说明，有值
      if (n === substractN && arr.length === 1) continue;
      array.push([n, substractN]);
    }
    pre = n;
  }
  return array;
};

var arr = [-1,0,1,2,-1,-4];
console.log(fourSum(arr, -1))
