var BinarySearchTree = function(value) {
  var newBinaryTree = {};

  newBinaryTree.value = value;
  newBinaryTree.left = null;
  newBinaryTree.right = null;
  _.extend(newBinaryTree, binaryTreeMethods);

  return newBinaryTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value) {
  if (this.value < value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
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

binaryTreeMethods.depthFirstLog = function(value) {
  value(this.value);

  if (this.left !== null) {
    this.left.depthFirstLog(value);
  }

  if (this.right !== null) {
    this.right.depthFirstLog(value);
  }
}

// Accidentally coded an insert function that also rebalances the tree for optimal sort
binaryTreeMethods.insertRebalance = function(value) {
  let tempTree = {value: this.value, left: this.left, right: this.right};

  if (tempTree.right !== null && tempTree.left !== null) {
    if (tempTree.value < value) {
      this.right.insert(value);
      return;
    } else {
      this.left.insert(value);
      return;
    }
  } else {
    if (tempTree.right === null && tempTree.left !== null) {
      if (tempTree.value < value) {
        this.right = BinarySearchTree(value);
        return;
      } else if (tempTree.left.value > value) {
        this.value = tempTree.left.value;
        this.right = BinarySearchTree(tempTree.value);
        this.left = BinarySearchTree(value);
        return;
      } else {
        this.value = value;
        this.right = BinarySearchTree(tempTree.value);
        this.left = BinarySearchTree(tempTree.left.value);
        return;
      }
    } else if (tempTree.right !== null && tempTree.left === null) {
      if (tempTree.value > value) {
        this.left = BinarySearchTree(value);
      } else if (tempTree.right.value < value) {
        this.value = tempTree.right.value;
        this.left = BinarySearchTree(tempTree.value);
        this.right = BinarySearchTree(value);
        return;
      } else {
        this.value = value;
        this.left = BinarySearchTree(tempTree.value);
        this.right = BinarySearchTree(tempTree.right.value);
        return;
      }
    } else {
      if (tempTree.value < value) {
        this.right = BinarySearchTree(value);
        return;
      } else {
        this.left = BinarySearchTree(value);
        return;
      }
    }
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */


