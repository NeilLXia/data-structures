class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue(value) {
    this.storage[this.size()] = value;
  }

  dequeue() {
    let dataSize = this.size();

    if (dataSize > 0) {
      let poppedElement = this.storage[0];

      for (let i = 0; i < dataSize - 1; i++) {
        this.storage[i] = this.storage[i + 1];
      }

      delete this.storage[dataSize - 1];
      return poppedElement;
    }
  }

  size() {
    return Object.keys(this.storage).length;
  }
}
