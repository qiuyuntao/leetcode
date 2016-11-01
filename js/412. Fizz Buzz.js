/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  var arr = ['Fizz', 'Buzz'];
  var array = [];

  var i = 1;
  while (i <= n) {
    if (i % 15 === 0) {
      array.push(arr.join(''));
    } else if (i % 5 === 0) {
      array.push(arr[1])
    } else if (i % 3 === 0) {
      array.push(arr[0])
    } else {
      array.push(String(i));
    }
    i++;
  }

  return array;
};
