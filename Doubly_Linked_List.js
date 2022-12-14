class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = 0;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    const oldTail = this.tail;

    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }

    this.length--;
    return oldTail;
  }

  shift() {
    if (!this.head) return undefined;

    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;

    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(position) {
    if (position < 0 || position >= this.length) return null;

    let index = null;
    let currentNode = null;

    if (position > this.length / 2) {
      index = this.length - 1;
      currentNode = this.tail;
      while (index !== position) {
        currentNode = currentNode.prev;
        index--;
      }
    } else {
      currentNode = this.head;
      index = 0;
      while (index !== position) {
        currentNode = currentNode.next;
        index++;
      }
    }

    return currentNode;
  }

  set(position, val) {
    const node = this.get(position);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(position, val) {
    if (position < 0 || position > this.length) return false;
    if (position === 0) return !!this.unshift(val);
    if (position === this.length) return !!this.push(val);

    const prevNode = this.get(position - 1);
    const nextNode = prevNode.next;
    const newNode = new Node(val);

    prevNode.next = newNode;
    newNode.prev = prevNode;
    nextNode.prev = newNode;
    newNode.next = nextNode;

    this.length++;
    return true;
  }

  remove(position) {
    if (position < 0 || position >= this.length) return false;
    if (position === 0) return !!this.shift();
    if (position === this.length - 1) return !!this.pop();

    const removedNode = this.get(position);

    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    removedNode.next = null;
    removedNode.prev = null;

    this.length--;
    return removedNode;
  }
}
