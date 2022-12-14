class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
    this.frequency = 0;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      this.root.frequency++;
    } else {
      let currentNode = this.root;
      while (true) {
        if (val === currentNode.val) {
          currentNode.frequency++;
          return this;
        }
        if (val < currentNode.val) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            currentNode.left.frequency++;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            currentNode.right.frequency++;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  contains(val) {
    if (this.root === null) return false;

    let currentNode = this.root;
    let found = false;

    while (currentNode && !found) {
      if (val === currentNode.val) {
        found = true;
      } else if (val < currentNode.val) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right) {
          currentNode = currentNode.right;
        }
      }
    }
    return found;
  }
  
  breadthFirstSearch() {
    const data = [];
    const queque = [];

    let node = this.root;
    queque.push(node);

    while (queque.length) {
      node = queque.shift();
      data.push(node.val);
      if (node.left) queque.push(node.left);
      if (node.right) queque.push(node.right);
    }
    
    return data;
  }

  depthFirstSearchPreOrder() {
    const data = [];
    let currentNode = this.root;

    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(currentNode);
    return data;
  }

  depthFirstSearchPostOrder() {
    const data = [];
    let currentNode = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    }

    traverse(currentNode);
    return data;
  }

  depthFirstSearchInOrder() {
    const data = [];
    let currentNode = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    }

    traverse(currentNode);
    return data;
  }
}
