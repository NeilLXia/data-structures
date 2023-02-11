var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  newTree.parent = null;
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  newChild = new Tree(value);
  newChild.parent = this;

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

treeMethods.traverse = function(func) {
  func(this);

  this.children.forEach(function(child) {
    child.traverse(func);
  });
};



/*
 * Complexity: What is the time complexity of the above functions?

addChild = O(1)
contains = O(n)
 */
