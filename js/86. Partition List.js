/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  head = U.getList(head);
  let list = null;
  let node = null;
  node = head;

  let leftList = null;
  let rightList = null;
  let leftHead;
  let rightHead;

  while (node) {
    if (node.val < x) {
      let obj = setList(leftList, node.val, leftHead);
      leftList = obj.list;
      leftHead = obj.head;
    } else {
      let obj = setList(rightList, node.val, rightHead);
      rightList = obj.list;
      rightHead = obj.head;
    }
    node = node.next;
  }

  if (!leftList)
  if (!rightList) list = leftHead;

  if (!leftList) {
    list = rightHead;
  } else if (!rightList) {
    list = leftHead;
  } else {
    leftList.next = rightHead;
    list = leftHead;
  }

  return getArray(list);
};

function setList(list, val, head) {
  if (!list) {
    list = {
      val: val,
      next: null
    }
    head = list;
  } else {
    list.next = {
      val: val,
      next: null
    }
    list = list.next;
  }

  return {
    list: list,
    head: head,
  };
}

function getArray(obj) {
  let array = [];

  while (obj) {
    array.push(obj.val);
    obj = obj.next;
  }
  return array;
}

console.log(partition([1, 1], 0));
