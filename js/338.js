/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  var array = [];
  for (var i = 0; i <= num; i++) {
    if (i === 0) {
      array.push(0);
      continue;
    }
    var b = i.toString(2);
    var arr = b.match(/1/g);
    array.push(arr.length);
  }
  return array;
};

console.log(countBits(5))
