class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);

    const heap = this.values;

    let index = heap.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    while (heap[parentIndex] <= heap[index]) {
      [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  extractMax() {
    if (!this.values.length) return;

    this.swap(0, this.values.length - 1);
    const oldHead = this.values.pop();

    let parent = 0;
    let leftChild = 1;
    let rightChild = 2;

    let max = Math.max(
      this.values[leftChild],
      this.values[rightChild] || -Infinity
    );

    while (this.values[parent] < max) {
      let child = this.values[leftChild] === max ? leftChild : rightChild;

      this.swap(parent, child);

      parent = child;

      leftChild = parent * 2 + 1;
      rightChild = parent * 2 + 2;

      max = Math.max(
        this.values[leftChild],
        this.values[rightChild] || -Infinity
      );
    }
    return oldHead;
  }

  swap(idx1, idx2) {
    [this.values[idx1], this.values[idx2]] = [
      this.values[idx2],
      this.values[idx1],
    ];
  }
}
