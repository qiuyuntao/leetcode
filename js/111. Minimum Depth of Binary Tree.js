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
 var minDepth = function(root) {
   if (!root) return 0;
   var min = 999999999;
   search(root, 1);

   function search(root, level) {
     if (root) {
       if (!root.left && !root.right) {
         if (min > level) min = level;
       }
       search(root.left, level + 1);
       search(root.right, level + 1);
     }
   }

   return min;
 };

var obj = {
  val: 1,
  left: {
    val: 2
  },
  right: null
};

console.log(minDepth(obj));


[1,2,3,4,null,null,5]
