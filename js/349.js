/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var nums1 = [1, 2, 2, 1];
var nums2 = [2, 2];

var intersection = function(nums1, nums2) {
  if (nums1.length === 0 || nums2.length === 0) return [];
  nums1 = removeSame(nums1);
  nums2 = removeSame(nums2);

  var newArr = [];

  for (var i = 0; i < nums1.length; i++) {
    if (isInArr(nums1[i], nums2)) newArr.push(nums1[i]);
  }

  return newArr;
};


function isInArr(data, array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === data) return true;
  }
  return false;
}

function removeSame(array) {
  var newArr = [];
  array = array.sort();

  newArr.push(array[0]);

  for (var i = 1; i < array.length; i++) {
    var d = array[i];
    if (newArr[newArr.length - 1] !== d) {
      newArr.push(d);
    }
  }
  return newArr;
}
