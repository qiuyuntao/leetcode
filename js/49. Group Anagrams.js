/**
 * link: https://leetcode.com/problems/anagrams/
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  var obj = {};
  for (var i = 0, l = strs.length; i < l; i++) {
    var str = strs[i];
    var s = str.split('').sort().join('');
    if (!obj[s]) obj[s] = [];
    obj[s].push(str);
  }
  var array = [];
  for (var j in obj) {
    array.push(obj[i])
  }

  return array;
};

var strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagrams(strs));
