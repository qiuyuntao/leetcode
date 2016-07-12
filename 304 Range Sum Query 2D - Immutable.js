/**
 * @constructor
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  this.map = {};
  var sum = 0;
  var index = 0;

  matrix.forEach((arr) => {
    arr.forEach((d) => {
      sum += d;
      this.map[index++] = sum;
    });
  });
  this.map[-1] = 0;
  this.col = matrix[0].length;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  var sums = 0;
  for (var i = row1; i <= row2; i++) {
    var head = i * this.col + col1 - 1;
    var tail = i * this.col + col2;
    sums += this.map[tail] - this.map[head];
  }

  return sums;
};


/**
 * Your NumMatrix object will be instantiated and called as such:
 * var numMatrix = new NumMatrix(matrix);
 * numMatrix.sumRegion(0, 1, 2, 3);
 * numMatrix.sumRegion(1, 2, 3, 4);
 */

var matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
];

 var numMatrix = new NumMatrix(matrix);
 console.log(numMatrix.sumRegion(0, 0, 0, 0));
