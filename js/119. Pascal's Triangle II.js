/**
 * link: https://leetcode.com/problems/pascals-triangle-ii/
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  var array = [];
  var index = 1;

  while (index <= rowIndex + 1) {
    if (index === 1) {
      array = [1];
    } else if (index === 2) {
      array = [1, 1]
    } else {
      var arr = [1];
      var left = array[0], right;
      for (var i = 1; i < array.length; i++) {
        right = array[i];
        arr.push(left + right);
        left = right;
      }
      arr.push(1);
      array = arr;
    }
    index++;
  }
  return array;
};
