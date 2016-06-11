/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

'use strict';

var root = [4,2,7,1,3,6,9];

var invertTree = function(root) {
  if (!root) return null;
  var temp = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(temp);
  return root;
};

// var invertTree = function(root) {
//   if (root === null) return root;
//
//   var depth = calculateDepth(root); // 计算深度
//   root = complementTree(root, depth); // 补足二叉树
//   var n = 1;
//   while (n <= depth - 1) {
//     var first = Math.pow(2, n) - 1;
//     var last = Math.pow(2, n + 1) - 1 - 1;
//     var middle = (first + last) / 2;
//     var count = first + last;
//     for (var i = first; i <= middle; i++) {
//       var temp = root[i];
//       root[i] = root[count - i];
//       root[count - i] = temp;
//     }
//     n++;
//   }
//
//   return root;
// };
//
// function calculateDepth(root) {
//   var n = 0;
//   while (Math.pow(2, n) - 1 < root.length) {
//     n++;
//   }
//   return n;
// }
//
// function complementTree(root, depth) {
//   var length = root.length;
//   // var n = parseInt(length / 2) + 1;
//   if (Math.pow(2, depth) - 1 !== length) {
//     for (var i = length; i < Math.pow(2, depth) - 1; i++) {
//       root.push(null);
//     }
//   }
//   return root;
// }
//
// console.log(invertTree([4,2,7,1,3,6,9]));
//
// console.log([].length)
