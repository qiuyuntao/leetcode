/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  var array = [];debugger
  array = search(root, []);

  return array;
};

function search(root, array) {
  if (!root) return array;
  if (root.val) array.push(root.val);

  search(root.left, array);
  search(root.right, array);

  return array;
}

var obj = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      right: null,
      left: null
    },
    right: null
  }
};

console.log(preorderTraversal(obj));