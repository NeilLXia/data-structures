var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[someInstance.size()] = value;
  };

  someInstance.pop = function() {
    let dataSize = someInstance.size();

    if (dataSize > 0) {

        let poppedElement = storage[(dataSize - 1).toString()];
        delete storage[(dataSize - 1).toString()];

        return poppedElement;
    }
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};