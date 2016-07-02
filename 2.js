/**
 * link: https://leetcode.com/problems/add-two-numbers/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var head = {
    val: getVal(l1.val, l2.val),
    next: null
  }
  var tail = head;
  l1 = l1.next;
  l2 = l2.next;
  while (l1) {
    tail.next = {
      val: getVal(l1.val, l2.val),
      next: null
    }
    tail = tail.next;
    l1 = l1.next;
    l2 = l2.next;
  }

  return head;
};

function getVal(a, b) {
  var count = String(a + b);
  return Number(count[count.length - 1]);
}

var l1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null
    }
  }
};

var l2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null
    }
  }
};

console.log(addTwoNumbers(l1, l2));
