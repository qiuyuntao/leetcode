/**
 * link: https://leetcode.com/problems/summary-ranges/
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if (!nums.length) return [];

  var array = [];
  var start = nums[0];
  var pre = start;
  var data;

  for (var i = 1, l = nums.length; i < l; i++) {
    data = nums[i];

    if (data - pre != 1) {
      pushValue(start, pre, array);
      start = data;
    }
    pre = data;
  }

  pushValue(start, pre, array);

  var arr = array.map((d) => {
    return d.join('->');
  });

  return arr;
};

function pushValue(start, pre, array) {
  if (pre === start) {
    array.push([pre])
  } else {
    array.push([start, pre]);
  }
}

var nums = [0,1,2,4,5,7];
console.log(summaryRanges(nums));
