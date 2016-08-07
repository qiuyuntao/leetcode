/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (q === null && p === null) return true;

  var arr_1 = traverseTree(p, []);
  var arr_2 = traverseTree(q, []);

  if (arr_1.length !== arr_2.length) return false;

  for (var i = 0; i < arr_1.length; i++) {
    if (arr_1[i] !== arr_2[i]) return false;
  }

  return true;
};

function traverseTree(root, array) {
  if (!root) return array.push(null);

  array.push(root.val);
  traverseTree(root.left, array);
  traverseTree(root.right, array);

  return array;
}