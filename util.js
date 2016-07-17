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
  },
  binarySearch(arr, val) {
    var high = arr.length - 1;
    var mid = 0;
    while (low <= high) {
      mid = Math.floor((low + high) / 2);
      if (arr[mid] === val) {
        return mid;
      } else if (arr[mid] > val) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return -1;
  },
  converBinary(n) {
    var index = 0;
    while (n > 0) {
      if (n % 2 === 1) index++;
      n = Math.floor(n / 2);
    }

    return index;
  }
}
