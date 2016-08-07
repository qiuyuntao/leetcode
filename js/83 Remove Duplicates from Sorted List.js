/**
 * link: https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  head = U.getList(head);
  if (!head) return head;

  var node = head;
  var pre;

  while (node.next) {
    if (node.val === node.next.val) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }

  return head;
};


var arr = [1, 1, 2, 2, 3, 3];

console.log(deleteDuplicates(arr));
