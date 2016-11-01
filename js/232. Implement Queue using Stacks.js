/**
 * @constructor
 */
var Queue = function() {
  this.array = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
    let length = this.array.length;
    this.array[length] = x;
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
    var array = [];
    for (var i = 1; i < this.array.length; i++) {
        array.push(this.array[i]);
    }
    this.array = array;
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
    return this.array[0];
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
  return this.array.length == 0;
};
