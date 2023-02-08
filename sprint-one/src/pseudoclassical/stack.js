var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

// All Car Methods
//Stack.prototype = {};

Stack.prototype.push = function(value) {
  this.storage[this.size()] = value;
}

Stack.prototype.pop = function() {
  let dataSize = this.size();

  if (dataSize > 0) {
    let poppedElement = this.storage[(dataSize - 1).toString()];

    delete this.storage[(dataSize - 1).toString()];
    return poppedElement;
  }
}

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
}

