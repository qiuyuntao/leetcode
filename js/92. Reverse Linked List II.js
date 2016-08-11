/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
// var reverseBetween = function(head, m, n) {
//   if (!head || m === n ) return head;
//
//   var array = [];
//
//   while (head) {
//     array.push(head.val);
//     head = head.next;
//   }
//
//   var arr = array.slice(m - 1, n); console.log(arr);
//   arr.reverse();
//
//   for (var i = m - 1; i < n; i++) {
//     array[i] = arr[0];
//     arr.shift();
//   }
//   return array;
// };
//

var reverseBetween = function(head, m, n) {
  if (!head || m === n ) return head;

  head = U.getList(nums);
  var node = head;
  var index = 1;
  var obj;
  var pre, next, h, t;

  while (node) {
    if (index === m) {
      h = node;
    }

    if (index === n) {
      t = node;
      next = node.next;

      obj = reverse(h, t);
      break;
    }

    if (!h) pre = node;
    node = node.next;
    index++;
  }

  if (!pre) {
    head = obj.node;
  } else {
    pre.next = obj.node;
  }
  obj.tail.next = next;

  return head;
};

function reverse(head, tail) {
  var list = {};
  tail.next = null;
  var node = head;
  var pre, next;
  var h, t;
  var flag = true;

  while (node) {
    if (!pre) {
      pre = node;
      node = node.next;
      pre.next = null;
      t = pre;
      continue;
    }

    next = node.next;
    node.next = pre;
    pre = node;
    node = next;
  }
  return {
    node: pre,
    tail: t
  };
}

var nums = [3, 5]

console.log(reverseBetween(nums, 1, 2));
