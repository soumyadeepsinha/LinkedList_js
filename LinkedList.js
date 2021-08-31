const LinkedlistNode = require("./LinkedlistNode");


class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  insert(data) {
    const node = new LinkedlistNode(data);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length = +1;
  }
}




module.exports = LinkedList;