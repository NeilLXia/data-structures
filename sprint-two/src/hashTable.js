

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!Array.isArray(this._storage.get(index))) {
    this._storage.set(index, []);
  }

  let subIndex = _.findIndex(this._storage.get(index), function(tuples) {
    return tuples[0] === k;
  });

  let currentBucket = this._storage.get(index);
  if (subIndex === -1) {
    currentBucket.push([k, v]);
  } else {
    currentBucket[subIndex] = [k, v];
  }

  this._storage.set(index, currentBucket);

  // resize if needed
  let storedCount = this.tupleCount();

  if (storedCount > this._limit * 0.75) {
    this.resize(2);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  let currentBucket = this._storage.get(index);

  let subIndex = _.findIndex(this._storage.get(index), function(tuples) {
    return tuples[0] === k;
  });

  if (subIndex === -1) {
    return undefined;
  }

  return currentBucket[subIndex][1];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  let currentBucket = this._storage.get(index);

  let subIndex = _.findIndex(this._storage.get(index), function(tuples) {
    return tuples[0] === k;
  });

  if (subIndex !== -1) {
    currentBucket.splice(subIndex, 1);
  }

  // resize if needed
  let storedCount = this.tupleCount();

  if (storedCount < this._limit * 0.25) {
    this.resize(.5);
  }
};

HashTable.prototype.tupleCount = function() {
  let storedCount = 0;
  this._storage.each(function(bucket) {
    bucket = bucket || [];
    storedCount += bucket.length;
  });

  return storedCount;
}

HashTable.prototype.resize = function(modifier) {
  let allTuples = [];

  for (let index = 0; index < this._limit; index++) {
    let currentBucket = this._storage.get(index) || [];

    for (let i = 0; i < currentBucket.length; i++) {
      allTuples.push(currentBucket[i]);
    }
  }

  this._limit *= modifier;
  this._storage = LimitedArray(this._limit);

  for (i = 0; i < allTuples.length; i++) {
    this.insert(allTuples[i][0], allTuples[i][1]);
  };
}

/*
 * Complexity: What is the time complexity of the above functions?
insert
retrieve
remove
 */


