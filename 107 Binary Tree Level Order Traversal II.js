/**
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
  var array = [];
  if (!root) return [];
  array.push(root.val);
  BFS(root, array);
  var length = Math.ceil(Math.log2(array.length));
  var index = 1;
  var j = -1;
  var arr = [];
  var a = [];
  console.log(array)
  array.forEach((d, i) => {
    if (d !== null) a.push(d);
    if (i + 1 === Math.pow(2, index) - 1) {
      arr.push(a);
      a = [];
      index++;
    }
  });

  if (a.length) arr.push(a);

  return arr.reverse();
};

function BFS(root, array) {
  if (!root) {
    array.push(null);
    return;
  }
  if (root.left) {
    array.push(root.left.val);
  } else {
    array.push(null);
  }
  if (root.right) {
    array.push(root.right.val);
  } else {
    array.push(null);
  }
  BFS(root.left, array);
  BFS(root.right, array);
}

var root = [1, 2, null, 3, null, 4, null, 5];
var root = {
  val: 1,
  left: {
    left: {
      val: 3,
      left: {
        val: 4,
        left: {
          val: 5
        },
        right: null
      },
      right: null
    },
    right: null
  },
  right: null
}

console.log(levelOrderBottom(root));
