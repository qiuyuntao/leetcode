/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
 // var binaryTreePaths = function(root) {
 //    var array = [];
 //    if (!root) return array;
 //
 //    search(root);
 //
 //    function search(root) {
 //      if (!root) return;
 //      if (!root.left && !root.right) {
 //        array.push(root);
 //      } else {
 //        if (root.left && !root.left.father) root.left.father = root;
 //        if (root.right && !root.right.father) root.right.father = root;
 //        search(root.left);
 //        search(root.right);
 //      }
 //    }
 //
 //    return array.map((d) => {
 //      var arr = [];
 //      while (d) {
 //        arr.unshift(d.val);
 //        d = d.father;
 //      }
 //      return arr.join('->');
 //    });
 // };

 var binaryTreePaths = function(root) {
   var array = [];
   var pathArray = [];
   var leafArray = [];
   while (array.length) {
     var node = array[0];
     if (node.left) {
       array.push(node.left);
       node.left.father = node;
     }
     if (node.right) {
       array.push(node.right);
       node.right.father = node;
     }
     if (!node.left && !node.right) leafArray.push(node);
     array.shift();
   }

   return leafArray.map((node) => {
     var arr = [];
     while (node) {
       arr.unshift(node.val);
       node = node.father;
     }
     return arr.join('->');
   });
 };


 var root = {
     "val": 5,
     "right": {
         "val": 8,
         "right": {
             "val": 4,
             "right": {
                 "val": 1,
                 "right": null,
                 "left": null
             },
             "left": {
                 "val": 5,
                 "right": null,
                 "left": null
             }
         },
         "left": {
             "val": 13,
             "right": null,
             "left": null
         }
     },
     "left": {
         "val": 4,
         "right": null,
         "left": {
             "val": 11,
             "right": {
                 "val": 2,
                 "right": null,
                 "left": null
             },
             "left": {
                 "val": 7,
                 "right": null,
                 "left": null
             }
         }
     }
 };

console.log(binaryTreePaths(root));
