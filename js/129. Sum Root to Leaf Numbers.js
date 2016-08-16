/**
 * link: https://leetcode.com/problems/sum-root-to-leaf-numbers/
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
var sumNumbers = function(root) {
   var array = [root];
   var sum = 0;

   if (!root) return sum;
   root.sum = root.val;
   while (array.length) {
     var node = array[0];
     if (node.left) {
       array.push(node.left);
       node.left.sum = node.sum * 10 + node.left.val;
     }
     if (node.right) {
       array.push(node.right);
       node.right.sum = node.sum * 10 + node.right.val;
     }
     if (!node.left && !node.right) {
       sun += node.sum;
     }
     array.shift();
   }

   return sum;
};
