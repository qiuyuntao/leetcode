const U = {
  getList(arr) {
    if (!arr.length) return null;
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
  },
  turnIntoArray(head) {
    var array = [];
    while (head) {
      array.push(head.val);
      head = head.next;
    }
    return array;
  }
}
