/**
 * link: https://leetcode.com/problems/3sum/
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function(nums) {
//   var final = [];
//   if (nums.length < 3) return [];
//   nums = nums.sort((a, b) => {
//     return a - b;
//   });

//   var pre;
//   nums.forEach((d, index) => {
//     if (pre === d) return;
//     var left = 0 - d;
//     var arr = nums.slice(0);
//     arr.splice(0, index + 1);
//     var array = twoSum(arr, left);
//     if (array.length) {
//       while (array.length) {
//         var a = [];
//         var b = array.pop();
//         var c = [b[0], b[1], d];
//         final.push(c);
//       }
//     }
//     pre = d;
//   });

//   return final;
// };

// var twoSum = function(nums, target) {
//   var obj = {};
//   var o = {};
//   var array = [];
//   for (var i = 0; i < nums.length; i++) {
//     if (!obj[nums[i]]) obj[nums[i]] = [];
//     obj[nums[i]].push(i);
//   }

//   var pre;
//   for (var j = 0; j < nums.length; j++) {
//     var n = nums[j];
//     if (o[n]) continue;
//     o[n] = true;
//     if (pre === n) continue;
//     var substractN = target - n;
//     if (o[substractN] && n !== substractN) continue;
//     o[substractN] = true;
//     var arr = obj[substractN];
//     if (arr) { // 存在说明，有值
//       if (n === substractN && arr.length === 1) continue;
//       array.push([n, substractN]);
//     }
//     pre = n;
//   }
//   return array;
// };

var threeSum = function(nums) {
  var target = 0;
  var array = [];
  var length = nums.length;
  var preNum;
  var obj = {};
  if (nums.length < 3) return [];
  nums = nums.sort((a, b) => {
    return a - b;
  });
  for (var i = 0; i < nums.length - 2; i++) {
    var d = nums[i];
    if (d === preNum) continue;
    preNum = d;
    var left = i + 1;
    var right = length - 1;
    while (left < right) {
      var count = d + nums[left] + nums[right];
      if (count > target) {
        right--;
      } else if (count < target) {
        left++;
      } else {
        var a = [d, nums[left], nums[right]];
        if (!obj[a]) {
          obj[a] = true;
          array.push(a);
        }
        left++;
      }
    }
  }

  return array;
};

var arr = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(arr))
