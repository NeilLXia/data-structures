var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    newNode = new Node(value);

    if (list.tail !== null) {
      list.tail.next = newNode;
    }

    if (list.head === null) {
      list.head = newNode;
    }

    list.tail = newNode;
  };

  list.removeHead = function() {
    let oldHead = list.head;
    list.head = list.head.next;
    delete oldHead;
    return oldHead.value;
  };

  list.contains = function(target) {
    currentNode = list.head;

    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      }

      currentNode = currentNode.next;
    }

    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?

addToTail = O(1)
removeHead = O(1)
contains = O(n)
 */

