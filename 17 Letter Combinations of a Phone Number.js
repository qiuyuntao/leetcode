/**
 * link: https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  var obj = {
    '0': '',
    '1': '*',
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'nmo',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };

  var array = digits.split('');
  var array_1 = [];
  var head = 0;
  var tail = 0;
  var flag = true;

  while (array.length) {
    var string = obj[array.shift()];
    for (var i = 0; i < string.length; i++) {
      var s = string[i];
      if (flag) {
        array_1.push(s);
      } else {
        for (var j = head; j < tail; j++) {
          array_1.push(array_1[j] + s);
        }
      }
    }
    head = tail;
    tail = array_1.length;
    flag = false;
  }
  console.log(array_1, head);
  return array_1.splice(head, tail - head);
};

console.log(letterCombinations('234'));
