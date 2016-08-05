/**
 * @constructor
 */
var Stack = function() {
    this.stack = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function(x) {
  this.stack[this.stack.length] = x;
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function() {
  this.stack.length = this.stack.length - 1;
};

/**
 * @returns {number}
 */
Stack.prototype.top = function() {
  return this.stack[0];
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function() {
  return this.stack.length === 0;
};
