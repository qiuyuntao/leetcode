/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.map = {};
  var sum = 0;

  nums.forEach((d, i) => {
    sum += d;
    this.map[i] = sum;
  });
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  if (i === 0) return this.map[j];
  var sums = this.map[j] - this.map[i - 1];

  return sums;
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */

var nums = [-2,0,3,-5,2,-1];
var numArray = new NumArray(nums);
console.log(numArray.sumRange(0, 2));
console.log(numArray.sumRange(2, 5));
console.log(numArray.sumRange(0, 5));
