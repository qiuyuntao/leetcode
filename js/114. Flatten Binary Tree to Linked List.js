/**
 * link: https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  var head = root
  root = {}

  obj = search(head, [])

  obj.splice(obj.length - 2, obj.length)
}

function search(head, array) {
  if (head) {
    // obj.val = head.val
    // obj.left = null
    // obj.right = {}
    if (array.length === 0) {
      array.push(head.val, null, null)
    } else {
      array[array.length - 1] = head.val
      array.push(null, null)
    }

    search(head.left, array)
    search(head.right, array)
  }
  return array
}

var root = {
  val: 1,µµ:
    val: 2,
    right: null,
    left: null
  },
  right: {
    val: 3,
    right: null,
    left: null
  }
}

console.log(flatten(root));
