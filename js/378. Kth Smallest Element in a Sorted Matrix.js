/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  var array = []
  for (var i = 0, l = matrix.length; i < l; i++) {
    var arr = matrix[i]
    for (var j = 0; j < arr.length; j++) {
      array.push(arr[j])
    }
  }

  array.sort((a, b) => a - b)

  return array[k - 1]
}

var matrix = [[1,5,9],[10,11,13],[12,13,15]]
var k = 8

console.log(kthSmallest(matrix, k))
