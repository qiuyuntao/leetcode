/**
 * link: https://leetcode.com/problems/first-unique-character-in-a-string/
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let obj = {};
  let exitObj = {};
  let index = 0;

  for (var i = 0; i < s.length; i++) {
    let c = s[i];

    if (obj[c] === -1) continue;

    if (obj[c] === undefined) {
      obj[c] = i;
      exitObj[c] = i;
    } else {
      obj[c] = -1;
      delete exitObj[c];
    }
  }

  let min = 100000;
  for (let j in exitObj) {
    if (exitObj[j] < min) min = exitObj[j]
  }

  return min === 100000 ? -1 : min;
};

console.log(firstUniqChar('cc'))
