/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

var count = 0;
var obj = {};
var uniquePaths = function(m, n) {
  traversal(1, 1, [m, n]);
  console.log(obj);
  return count;
};

function traversal(x, y, arr, dir) {
  if (x === arr[0] || y === arr[1]) return;
  if (!obj[Number(x + 1) + ',' + y]) {
    obj[Number(x + 1) + ',' + y] = true;
    if (dir !== 'right') count++;
  }
  traversal(x + 1, y, arr, 'right');
  if (!obj[x + ',' + Number(y + 1)]) {
    obj[x + ',' + Number(y + 1)] = true;
    if (dir !== 'bottom') count++;
  }
  traversal(x, y + 1, arr, 'bottom');
}

console.log(uniquePaths(4, 4));
