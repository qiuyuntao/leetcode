/**
 * link: https://leetcode.com/problems/isomorphic-strings/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  var map_s = {};
  var map_t = {};

  for (var i = 0; i < s.length; i++) {
    var a = s[i];
    var b = t[i];

    if (!map_s[a]) {
      map_s[a] = b;
    } else if (map_s[a] !== b) {
      return false;
    }

    if (!map_t[b]) {
      map_t[b] = a;
    } else if (map_t[b] !== a) {
      return false;
    }
  }

  return true;
};
