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
var reverseList = function(head) {
  var array = [];

  while (head) {
    array.push(head.val);
    head = head.next;
  }

  return array.reverse();
};

var obj = {
  val: 1,
  next: {
    val: 2,
    next: null
  }
};

console.log(reverseList(obj))