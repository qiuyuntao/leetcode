/**
 * link: https://leetcode.com/problems/kth-smallest-element-in-a-bst/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    if (!root) return root;
    var array = [];
    array = getSortArray(root, array);

    return array[k - 1];
};

function getSortArray(root, array) {
    if (!root) return array;
    if (!root.left) {
        array.push(root.val);
    } else {
        array = getSortArray(root.left, array);
        array.push(root.val);
    }

    if (!root.right) {
        return array;
    } else {
        array = getSortArray(root.right, array);
    }
    return array;
}
