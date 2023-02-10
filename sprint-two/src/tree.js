var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  newChild = new Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }

  if (_.some(this.children,function(child) {
    return child.contains(target);
  })) {
    return true;
  }

  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?

addChild = O(1)
contains = O(n)
 */
