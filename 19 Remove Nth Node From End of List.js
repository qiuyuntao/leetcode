/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

const U = {
  getList(arr) {
    var head = {
      val: arr.shift(),
      next: null
    }
    var tail = head;

    while (arr.length) {
      tail.next = {
        val: arr.shift(),
        next: null
      }
      tail = tail.next;
    }

    return head;
  }
}

var removeNthFromEnd = function(head, n) {
  head = U.getList(head);
  var node = head;
  var length = getListLength(head);
  var target = length - n - 1;
  if (target < 0) {
    head = head.next;
    return head;
  }
  var now = 0;
  while (node) {
    if (target === now) {
      node.next = node.next.next;
      return head;
    }
    now++;
    node = node.next;
  }
};

function getListLength(node) {
  var n = 0;
  while (node) {
    n++;
    node = node.next;
  }
  return n;
}

var arr = [1,2];
console.log(removeNthFromEnd(arr, 1));
