var BinarySearchTree = function(value) {
  var newBinaryTree = {};

  newBinaryTree.value = value;
  newBinaryTree.left = null;
  newBinaryTree.right = null;
  newBinaryTree.depth = 0;

  _.extend(newBinaryTree, binaryTreeMethods);

  return newBinaryTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value) {
  if (this.value < value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
      this.right.depth = this.depth + 1;
    } else {
      this.right.insert(value);
    }
  } else {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
      this.left.depth = this.depth + 1;
    } else {
      this.left.insert(value);
    }
  }
}

binaryTreeMethods.contains = function(value) {
  //debugger;

  if (this.value === value) {
    return true;
  }

  if (this.value < value) {
    if (this.right === null) {
      return false;
    } else {
      return this.right.contains(value);
    }
  } else {
    if (this.left === null) {
      return false;
    } else {
      return this.left.contains(value);
    }
  }
}

binaryTreeMethods.depthFirstLog = function(func) {
  func(this);

  if (this.left !== null) {
    this.left.depthFirstLog(func);
  }

  if (this.right !== null) {
    this.right.depthFirstLog(func);
  }
}

binaryTreeMethods.breadthFirstLog = function(func) {
  let queue = [];

  queue.push(this);

  while (queue.length > 0) {
    let runStack = queue.shift();

    if (runStack === null) {
      continue;
    }

    func(runStack);

    queue.push(runStack.left);
    queue.push(runStack.right);
  }
}

// Accidentally coded an insert function that also rebalances the tree for optimal sort
binaryTreeMethods.rebalance = function(value) {

  var allElements = [];
  var depthTracker = [];

  this.depthFirstLog(function(node) {
    allElements.push(node.value);
    depthTracker[node.depth] = depthTracker[node.depth] + 1 || 1;
  });

  let minDepth = 1000;
  let maxDepth = 0;

  depthTracker.forEach(function(value, index) {
    if ((2 ** index) - value > 0) {
      if (minDepth > index - 1) { minDepth = index - 1; }
      if (maxDepth < index - 1) { maxDepth = index - 1; }
    }
  });

  if (minDepth / maxDepth > 1/2) {
    return;
  }

  allElements.sort();

  var rebalancedTree = function(array) {

    if (array.length === 0) { return null; }

    let nodevalue = array[Math.floor(array.length/2)];

    let balancedTree = BinarySearchTree(nodevalue);

    balancedTree.left = rebalancedTree(array.slice(0, Math.floor(array.length/2)));
    balancedTree.right = rebalancedTree(array.slice(Math.floor(array.length/2) + 1, array.length));

    return balancedTree
  }

  return rebalancedTree(allElements);
}

/*
 * Complexity: What is the time complexity of the above functions?
 */


