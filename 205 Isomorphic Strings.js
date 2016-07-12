/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  var temp_s = '';
  var temp_t = '';
  var map_s = {};
  var index_s = 1;
  var map_t = {};
  var index_t = 1;
  for (var i = 0; i < s.length; i++) {
    var a = s[i];
    var b = t[i]
    if (!map_s[a]) map_s[a] = index_s++;
    temp_s += map_s[a];

    if (!map_t[b]) map_t[b] = index_t++;
    temp_t += map_t[b];

    if (temp_t !== temp_s) return false;
  }

  return true;
};

var s = 'aa';
var t = 'ab';




console.log(isIsomorphic(s, t))
