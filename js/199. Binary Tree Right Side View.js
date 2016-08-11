/**
 * link: https://leetcode.com/problems/binary-tree-right-side-view/
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
var rightSideView = function(root) {
  if (!root) return [];
  var array = [];
  var rightArray = [];
  search(root, 1);

  function search(root, level) {
    if (root) {
      if (array.length < level) {
        array.push(root.val);
      }
      search(root.right, level + 1)
      search(root.left, level + 1);
    } else {
      return;
    }
  }
  return array;
};
