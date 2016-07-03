/**
 * link: https://leetcode.com/problems/swap-nodes-in-pairs/
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
var swapPairs = function(head) {
  var head = U.getList(head);
  if (!head) return head;
  if (!head.next) return head;
  var tail = head;
  var pre, next, currnt;

  var flag = true;

  while (tail && tail.next) {
    pre = tail;
    next = tail.next;
    var n = next.next;
    next.next = pre;
    pre.next = n;
    if (flag) {
      flag = false;
      head = next;
    } else {
      currnt.next = next;
    }
    currnt = next.next;
    tail = next.next.next;
  }

  return head;
};

var arr = [1, 2];
console.log(swapPairs(arr));
