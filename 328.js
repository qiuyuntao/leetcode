/**
 * link: https://leetcode.com/problems/odd-even-linked-list/
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
var oddEvenList = function(head) {
  var array_1 = [];
  var array_2 = [];

  while (head) {
    var val = head.val;
    if (val % 2) {
      array_1.push(val);
    } else {
      array_2.push(val);
    }
    head = head.next;
  }

  console.log(array_1.concat(array_2));
};