/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function(s) {
//   var pre;
//   while (pre !== s) {
//     pre = s;
//     s = s.replace(/(\[\])|({})|(\(\))/g, '');
//   }

//   var reg = new RegExp(/[()\[\]{}]/g);
//   var array = s.match(reg);

//   if (!array) return true;
//   if (array.length % 2) return false;
//   while (array.length) {
//     var head = array.shift();
//     var tail = array.pop();
//     if (!isMatching(head, tail)) return false;
//   }

//   return true;
// };

var isValid = function(s) {
  if (s.length % 2) return false;
  var array = [];
  for (var i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      array.push(s[i])
    } else {
      if (!isMatching(array[array.length - 1], s[i])) {
        return false;
      } else {
        array.pop();
      }
    }
  }
  if (array.length) return false;
  return true;
}

function isMatching(a, b) {
  if ((a === '(' && b === ')') ||
      (a === '[' && b === ']') ||
      (a === '{' && b === '}')) {
    return true;
  }

  return false;
}

var s = '(('

console.log(isValid(s));
