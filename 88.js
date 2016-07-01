/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function(nums1, m, nums2, n) {
  if (!m) nums1 = [];
  if (!n) nums2 = [];

  for (var i = 0; i < n; i++) nums1.push(nums2[i]);
  nums1.sort();
  console.log(nums1)
};

merge([0], 0 ,[1] ,1);