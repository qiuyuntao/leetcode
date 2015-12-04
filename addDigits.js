'use strict';
var addDigits = function(num) {
  while (String(num).length !== 1) {
    var arr = getArr(num);
    var count = 0;
    for (var i in arr) {
      count += arr[i];
    }
    num = count;
  }
  return num;
};

var getArr = function (num) {
  var arr = [];
  while (num > 0) {
    var a = num % 10;
    num = parseInt(num / 10);
    arr.push(a);
  }
  return arr;
}
