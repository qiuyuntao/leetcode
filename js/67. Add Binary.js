/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  a = a.split('');
  b = b.split('');
  var s = '';
  var d = 0;

  while (a.length || b.length || d !== 0) {
    var i = Number(a.length ? a.pop() : 0);
    var j = Number(b.length ? b.pop() : 0);
    var c = getBinary(i, j, d);
    d = c.quotient;
    s = String(c.reminder) + s;
  }

  return s;
};

function getBinary(a, b, c) {
  var count = a + b + c;
  return {
    reminder: count % 2, // 余数
    quotient: parseInt(count / 2) // 商
  };
}

var a = "11";
var b = "1";

console.log(addBinary(a, b));
