/**
 * link: https://leetcode.com/problems/find-k-pairs-with-smallest-sums/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
  if (nums1.length === 0 || nums2.length === 0) return [];
  var array = [];
  var i = 0;
  var j = 0;
  var arr_1 = [];
  var arr_2 = [];
  var flag = true;
  var index;
  var arr = [];
  while (i * j < k && i + j < nums1.length + nums2.length) {
    var d_1 = nums1[i];
    var d_2 = nums2[j];

    if (!arr_1.length && !arr_2.length) {
      arr_1.push(d_1);
      arr_2.push(d_2);
      i++;
      j++;
      continue;
    }

    if (nums2[0] + d_2 < nums1[0] + d_1) {
      nums2.push(d_2);
      j++;
    } else {
      nums1.push(d_1);
      i++;
    }
  }

  return getSum(arr_1, arr_2, k);
};

function getSum(arr_1, arr_2, k) {
  console.log(arr_1, arr_2)
  var array = [];

  while (arr_2.length) {
    var d = arr_2.shift();
    for (var i = 0; i < arr_1.length; i++) array.push([arr_1[i], d]);
  }

  if (array.length > k) array.splice(0, k);
  return array;
}

var nums1 = [1,2,4,5,6]
var nums2 = [3,5,7,9]

console.log(kSmallestPairs(nums1, nums2, 3));

