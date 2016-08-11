/**
 * link: https://leetcode.com/problems/binary-tree-level-order-traversal-ii/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (!root) return [];
  var array = [];
  search(root, 1);

  function search(root, level) {
    if (root) {
      if (array.length < level) {
        array.unshift([]);
      }

      var arr = array[array.length - level];
      arr.push(root.val);
      search(root.left, level + 1);
      search(root.right, level + 1)
    } else {
      return;
    }
  }

  return array;
};
