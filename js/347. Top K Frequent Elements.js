/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  nums = nums.sort();
  var array = [];

  nums.forEach((d) => {
    var lastObj = array[array.length - 1];
    if (!lastObj || lastObj['key'] !== d) {
      var obj = {
        key: d,
        value: 1
      };
      array.push(obj);
    } else {
      lastObj.value++;
    }
  });

  array.sort((a, b) => {
    return b.value - a.value
  });

  array = array.slice(0, k);

  var arr = [];
  for (var i = 0; i < k; i++) {
    arr.push(array[i]['key']);
  }
  return arr;
};

console.log(topKFrequent([1,1,1,2,2,2,3,3,3], 2));