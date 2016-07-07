/**
 * link: https://leetcode.com/problems/valid-perfect-square/
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    var n = 1;
    while (true) {
        var count = n * n;
        if (count === num) return true;
        if (count < num) n++;
        if (count > num) return false;
    }
};
