/**
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

  while (node && node.next) {debugger
    var next = node.next;
    if (next.val === node.val) {
      while (next && next.val === node.val) {
        next = next.next;
      }
      if (!pre) {
        head = next;
        node = head;
      } else {
        pre.next = next;
        node = next;
      }
    } else {
      node.next = next;
      pre = node;
      node = node.next;
    }
  }

  return head;
};

var head = [1, 1, 1];
console.log(deleteDuplicates(head));
