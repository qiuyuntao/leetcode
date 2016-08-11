/**
 * link: https://leetcode.com/problems/pascals-triangle/
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  var array = [];
  var index = 1;

  while (index <= numRows) {
    if (index === 1) {
      array.push([1]);
    } else if (index === 2) {
      array.push([1, 1]);
    } else {
      var arr = [1];
      var dataArr = array[index - 2];
      var left = dataArr[0], right;
      for (var i = 1; i < dataArr.length; i++) {
        right = dataArr[i];
        arr.push(left + right);
        left = right;
      }
      arr.push(1);
      array.push(arr);
    }
    index++;
  }
  return array;
};


console.log(generate(5));
