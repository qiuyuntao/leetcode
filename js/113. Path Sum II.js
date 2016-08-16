/**
 * link: https://leetcode.com/problems/path-sum-ii/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
 var pathSum = function(root, sum) {
   var array = [];
   if (!root) return array;

   search(root, sum);

   function search(root, sum) {
     if (!root) return;
     if (!root.left && !root.right && sum - root.val === 0) {
       array.push(root);
     } else {
       if (root.left && !root.left.father) root.left.father = root;
       if (root.right && !root.right.father) root.right.father = root;
       search(root.left, sum - root.val);
       search(root.right, sum - root.val);
     }
   }

   return array.map((d) => {
     var arr = [];
     while (d) {
       arr.unshift(d.val);
       d = d.father;
     }
     return arr;
   });
 };


console.log(pathSum(root, -5));
