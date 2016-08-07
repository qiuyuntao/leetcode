/**
 * link: https://leetcode.com/problems/linked-list-cycle-ii/
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
var detectCycle = function(head) {
  head = U.getList(head);
  var slow = head;
  var fast = head;
  var flag = null;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      flag = true;
      break;
    }
  }

  if (flag === true) {
    slow = head;
    while (slow !== fast) {
      slow = slow.next;
      fast = fast.next;
    }
    flag = slow;
  }

  return flag;
};

console.log(detectCycle([1]));
