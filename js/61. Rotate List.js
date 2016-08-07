/**
 * link: https://leetcode.com/problems/rotate-list/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    var array = turnIntoArray(head);
    return rotate(array, k);
};

var rotate = function(nums, k) {
  var length = nums.length
  if (k >= length) k = k % length
  if (length >= 1) {
    var arr = nums.splice(length - k, length)
    for (var i = arr.length - 1; i >= 0; i--) nums.unshift(arr[i])
  }
  return nums
};

function turnIntoArray(head) {
    var array = [];
    while (head) {
      array.push(head.val);
      head = head.next;
    }
    return array;
}
