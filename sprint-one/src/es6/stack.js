class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(value) {
    this.storage[this.size()] = value;
  }

  pop() {
    let dataSize = this.size();

    if (dataSize > 0) {
      let poppedElement = this.storage[(dataSize - 1).toString()];

      delete this.storage[(dataSize - 1).toString()];
      return poppedElement;
    }
  }

  size() {
    return Object.keys(this.storage).length;
  }

}