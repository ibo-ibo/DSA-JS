class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(position) {
    if (position >= this.length || position < 0) return undefined;
    let current = this.head;
    let index = 0;
    while (position !== index) {
      current = current.next;
      index++;
    }
    return current;
  }
  set(position, val) {
    const theNode = this.get(position);
    if (!theNode) return false;
    theNode.val = val;
    return true;
  }

  insert(position, val) {
    if (position > this.length || position < 0) return false;
    if (position === 0) return !!this.unshift(val);
    if (position === this.length) return !!this.push(val);
    const newNode = new Node(val);
    const nextNode = this.get(position);
    const prevNode = this.get(position - 1);
    newNode.next = nextNode;
    prevNode.next = newNode;
    this.length++;
    return true;
  }

  remove(position) {
    if (position >= this.length || position < 0 || !this.head) return false;
    if (position === 0) return this.shift();
    if (position === this.length - 1) return this.pop();
    const prevNode = this.get(position - 1);
    const removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  print() {
    const values = [];
    let current = this.head;
    while (current) {
      values.push(current.val);
      current = current.next;
    }
    return console.log(values);
  }
}

