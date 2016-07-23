/**
 * link: https://leetcode.com/problems/intersection-of-two-linked-lists/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  headA = U.getList(headA);
  headB = U.getList(headB);

  var a = headA;
  var b = headB;
  while (a !== b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }
  return a;
};

var headA = [1,2,5, 6, 7];
var headB = [11, 12, 143, 5, 6, 7];

console.log(getIntersectionNode(headA, headB));
