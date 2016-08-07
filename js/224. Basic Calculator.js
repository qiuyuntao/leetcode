/**
 * link: https://leetcode.com/problems/basic-calculator/
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  s = s.replace(/\s/g, '');
  if (s.length === 1) return Number(s);
  var reg = /\([\d+|\-\+]+\)/;
  var array = s.match(reg);
  var symbol = ''

  while (array) {
    var expression = array[0];
    var startIndex = array.index;
    if (startIndex !== 0) {
      symbol = s[startIndex - 1];
    }
    var count = cal(expression.substring(1, expression.length - 1));
    if (count < 0 && startIndex !== 0) {
      count *= -1;
      expression = symbol + expression;
      if (symbol === '-') {
        count = '+' + count;
      } else {
        count = '-' + count;
      }
    }
    s = s.replace(expression, count);
    reg.lastIndex = 0;
    array = s.match(reg);
  }
  if (!isNaN(s)) return Number(s);
  return cal(s);
};

function cal(s) {
  var digitalArray = s.match(/\d+/g); // 数字
  var patternArray = s.match(/[\-|\+]/g); // 加减符号
  var count = Number(digitalArray[0]);
  if (!patternArray) return count; // 如果不存在符号，直接return

  patternArray.forEach((pattern, i) => {
    leftDigtial = Number(digitalArray[i + 1]);
    if (pattern === '+') {
      count += leftDigtial
    } else {
      count -= leftDigtial;
    }
  });

  return count;
}

// "1 + 1" = 2
// " 2-1 + 2 " = 3
// "(1+(4+5+2)-3)+(6+8)" = 23

console.log(calculate('(1)'));
