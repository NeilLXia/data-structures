var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    newNode = new Node(value);

    if (list.tail !== null) {
      list.tail.next = newNode;
      newNode.prev = list.tail;
    }

    if (list.head === null) {
      list.head = newNode;
    }

    list.tail = newNode;
  };

  list.removeHead = function() {

    let oldHead = list.head;

    if (oldHead !== null) {

      list.tail = oldHead === list.tail ? null : list.tail;

      list.head = oldHead.next;

      if (list.head !== null) {
        list.head.prev = null;
      }

      return oldHead.value;
    }
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
  node.prev = null;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?

addToTail = O(1)
removeHead = O(1)
contains = O(n)
 */

