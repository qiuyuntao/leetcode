/**
 * link: https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    s = s.split('');
    s = s.sort()

    t = t.split('');
    t = t.sort()

    if (s.length !== t.length) return false;
    for (var i = 0; i < s.length; i++) {
        if (t[i] !== s[i]) return false;
    }
    return true;
};
