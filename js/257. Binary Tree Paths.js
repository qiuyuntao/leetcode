/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  var arr = [];
  var obj = {};
  search(root, []);

  return arr;

  function search(root, array) {
    if (!root) return array;
    array.push(root.val);
    var left = root.left;
    var right = root.right;

    if (left) {
      var leftArray = search(root.left, array.slice(0));
      arr.push(leftArray);
    }

    if (right) {
      var rightArray = search(root.right, array.slice(0));
      arr.push(rightArray);
    }

    return array;
  }
};

var obj = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
}

console.log(binaryTreePaths(obj));
