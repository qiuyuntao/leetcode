/**
 * link: https://leetcode.com/problems/count-complete-tree-nodes/
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
var countNodes = function(root) {
    var leftH = getHeight(root, 'left');
    var rightH = getHeight(root, 'right');
    var count;
    if (leftH === rightH) return Math.pow(2, leftH) - 1;

    return countNodes(root.left) + countNodes(root.right) + 1;
};

function getHeight(root, type) {
  if (!root) return 0;
  return 1 + getHeight(root[type], type);
}


var obj = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: null
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
}

console.log(countNodes(obj));
