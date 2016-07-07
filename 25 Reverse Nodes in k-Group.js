/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

var reverseList = function(array) {
  return array.reverse();
};

var reverseKGroup = function(head, k) {
  head = U.getList(head);
  if (!head || k === 1) return head;

  var node = head;
  var array = [];
  var arr = [];
  var index = 0;

  while (node || index % k === 0) {
    if (index % k === 0) {
      arr = reverseList(arr);
      for (var i = 0; i < arr.length; i++) array.push(arr[i]);
      arr = [];
    }

    if (!node) break;
    arr.push(node.val);
    node = node.next;
    index++;
  }

  for (var i = 0; i < arr.length; i++) array.push(arr[i]);

  return array;
};

var arr = [1, 2, 3, 4, 5, 6, 7];

console.log(reverseKGroup(arr, 3));
