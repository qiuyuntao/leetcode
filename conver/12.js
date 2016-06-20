/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  var arr_1 = [];
  var n = 1000;

  for (var i = 0; i < 4; i++) {
    var a = Math.floor(num / n);
    var b = num % n;
    n = n / 10;
    num = b;
    arr_1.push(a);
  }

  console.log(arr_1);
};

var num = 437;

console.log(intToRoman(num));
