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
var oddEvenList = function(head) {
  var oddHead = null;
  var evenHead = null;
  var oddTail = oddHead;
  var evenTail = evenHead;

  while (head) {
    if (head.val % 2 === 0) {

    }
  }
};

var obj = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null
    }
  }
};

console.log(oddEvenList(obj));