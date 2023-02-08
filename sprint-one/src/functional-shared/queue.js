var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var queueObj = {
    storage: {},
    enqueue: queueMethods.enqueue,
    dequeue: queueMethods.dequeue,
    size: queueMethods.size
  };

  return queueObj;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.size()] = value;
}

queueMethods.dequeue = function() {
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

queueMethods.size = function() {
  return Object.keys(this.storage).length;
}


