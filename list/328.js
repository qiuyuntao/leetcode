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
  var array = [];
  var n = 0;
  var index = 0;
  while (head) {
    var val = head.val;
    n = n + 1;
    console.log(n, val)
    if (n % 2) { // 为奇数位置
      array.splice(index, 0, val);
      index = index + 1;
    } else {
      array.push(val);
    }
    head = head.next;
  }

  return array;
};