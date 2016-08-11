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
  l1 = U.getList(l1);
  l2 = U.getList(l2);

  if (!l1) return l2;
  if (!l2) return l1;
  var val = getVal(l1.val, l2.val, 0).reminder;
  var quotient = getVal(l1.val, l2.val, 0).quotient;
  var array = [];
  array.push(val);
  var head = {
    val: val,
    next: null
  };
  var tail = head;
  l1 = l1.next;
  l2 = l2.next;

  while (l1 || l2) {
    var val_1 = l1 ? l1.val : 0;
    var val_2 = l2 ? l2.val : 0;
    val = getVal(val_1, val_2, quotient).reminder;
    quotient = getVal(val_1, val_2, quotient).quotient;
    tail.next = {
      val: val,
      next: null
    }
    array.push(val)
    tail = tail.next;
    l1 = l1 ? l1.next : l1;
    l2 = l2 ? l2.next : l2;
  }

  if (quotient > 0) {
    tail.next = {
      val: quotient,
      next: null
    }
    array.push(quotient);
  }

  return array;
  // return head;
};

function getVal(a, b, c) {
  var count = a + b + c;
  return {
    reminder: count % 10, // 余数
    quotient: parseInt(count / 10) // 商
  };
}

var l1 = [5];
var l2 = [5];

console.log(addTwoNumbers(l1, l2));
