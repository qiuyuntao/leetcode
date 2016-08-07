/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  if (!head) return head;

  var node = head;
  var pre;

  while (node) {
    if (node.val === val) {
      if (!pre) {
        head = head.next;
      } else {
        pre.next = node.next;
      }
    } else {
      pre = node;
    }
    node = node.next;
  }

  return head;
};
