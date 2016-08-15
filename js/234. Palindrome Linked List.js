/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  var array = [];
  var node = head;
  while (node) {
    array.push(node.val);
    node = node.next;
  }

  var length = array.length;
  for (var i = 0, l = Math.floor(length / 2); i < l; i++) {
    if (array[i] !== array[length - i - 1]) return false;
  }

  return true;
};


var head = [1,2,3,2,1];

console.log(isPalindrome(head));
