var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[someInstance.size()] = value;
  };

  someInstance.dequeue = function() {
    let dataSize = someInstance.size();

    if (dataSize > 0) {
        let poppedElement = storage[0];

        for (let i = 0; i < dataSize - 1; i++) {
          storage[i] = storage[i + 1]
        }
        delete storage[dataSize - 1];
        return poppedElement;
    }
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
