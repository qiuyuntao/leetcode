/**
 * link: https://leetcode.com/problems/odd-even-linked-list/
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  console.log(head);
  if (head === null) return head;
  var oddH = head;
  var oddTail = oddH;
  var evenH = head.next;
  var evenTail = evenH;
  var node = head.next;

  while (node && node.next) {
    oddTail.next = node.next;
    evenTail.next = node.next.next;
    oddTail = oddTail.next;
    evenTail = evenTail.next;
    node = node.next;
  }

  oddTail.next = evenH;
  return oddH;
};