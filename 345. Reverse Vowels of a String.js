/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  var array = s.match(/[a|e|i|o|u|A|E|I|O|U]/g);
  if (!array) return s;
  array.reverse();
  s = s.replace(/[a|e|i|o|u|A|E|I|O|U]/g, function() {
    return array.shift();
  })
  return s;
};

console.log(reverseVowels('aA'));
