/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var nums1 = [1, 2, 2, 1];
var nums2 = [2, 2];

var intersection = function(nums1, nums2) {
  if (nums1.length === 0 || nums2.length === 0) return [];

  nums1 = nums1.sort();
  nums2 = nums2.sort();

  var newArr = [];

  for (var i = 0; i < nums1.length; i++) {
    if (isInArr(nums1[i], nums2)) {
      newArr.push(nums1[i]);
    }
  }

  return newArr;
};

console.log(intersection(nums1, nums2));

function isInArr(data, array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === data) {
      array.splice(i, 1);
      return true;
    }
  }
  return false;
}
