/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var root = {
  val: 1,
  left: {
    val: 2,
    right: {
      val: 2,
      left: null,
      right: null
    },
    left: null
  },
  right: null
}

var maxDepth = function(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

console.log(maxDepth(root))
