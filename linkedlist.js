class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.count = 0;
  }

  append(node) {
    if (this.count === 0) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.count++;
  }

  prepend(node) {
    if (this.count === 0) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.count++;
  }

  size() {
    return this.count;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  at(index) {
    let curr;
    let currentIdx = 0;
    if (this.count === 0) {
      return null;
    } else {
      curr = this.head;
      while (curr && currentIdx <= index) {
        if (currentIdx === index) {
          return curr;
        }
        curr = curr.next;
        currentIdx++;
      }
    }
    return null;
  }

  pop() {
    let popped;
    if (this.count === 0) {
      return;
    } else if (this.count === 1) {
      popped = this.tail;
      this.tail = null;
      this.head = null;
      this.count--;
    } else {
      popped = this.tail;
      let curr = this.head;
      while (curr) {
        if (curr.next === this.tail) {
          curr.next = null;
          this.tail = curr;
          break;
        }
        curr = curr.next;
      }
    }
    return popped;
  }

  contains(value) {
    let curr;
    if (this.count === 0) {
      return false;
    } else {
      curr = this.head;

      while (curr) {
        if (curr.data === value) {
          return true;
        }
        curr = curr.next;
      }
    }
    return false;
  }

  find(value) {
    let curr;
    let index = 0;
    if (this.count === 0) {
      return null;
    } else {
      curr = this.head;
      while (curr) {
        if (curr.data == value) {
          return index;
        }
        curr = curr.next;
        index++;
      }
    }
    return null;
  }

  toString() {
    let valueList = [];
    let curr = this.head;

    while (curr) {
      valueList.push(`(${curr.data})`);
      curr = curr.next;
    }

    return valueList.join(" -> ");
  }
}

module.exports = { Node, LinkedList };