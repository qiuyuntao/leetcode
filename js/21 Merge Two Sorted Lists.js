/**
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

var mergeTwoLists = function(l1, l2) {
  l1 = U.getList(l1);
  l2 = U.getList(l2);
  if (!l1 && !l2) return null;
  if (!l1) return l2;
  if (!l2) return l1;

  var value;
  if (l1.val > l2.val) {
    value = l2.val;
    l2 = l2.next;
  } else {
    value = l1.val;
    l1 = l1.next;
  }
  var head = {
    val: value,
    next: null
  };
  var tail = head;

  while (l1 || l2) {
    var val;

    if (!l1) {
      tail.next = l2;
      tail = tail.next;
      break;
    } else if (!l2) {
      tail.next = l1;
      tail = tail.next;
      break;
    } else if (l1.val > l2.val) {
      val = l2.val;
      l2 = l2.next;
    } else {
      val = l1.val;
      l1 = l1.next;
    }

    tail.next = {
      val: val,
      next: null
    }
    tail = tail.next;
  }
  return head;
};

var a = [2];
var b = [1];
console.log(mergeTwoLists(a, b))

