

// Instantiate a new graph
var Graph = function() {
  this.vertices = [];
  this.adjList = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.vertices.push(node);
  this.adjList[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.vertices.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  let index = this.vertices.indexOf(node);
  this.vertices.splice(index, 1);

  let currentGraph = this;

  this.adjList[node].forEach(function(neighborVertex) {
    currentGraph.removeEdge(neighborVertex, node);
  });

  delete this.adjList[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.adjList[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var addOneWayEdge = function(fromNode, toNode, graph) {
    if (!graph.adjList[fromNode].includes(toNode)) {
      graph.adjList[fromNode].push(toNode);
    }
  }

  addOneWayEdge(fromNode, toNode, this);
  addOneWayEdge(toNode, fromNode, this);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var removeOneWayEdge = function(fromNode, toNode, graph) {
    if (graph.adjList[fromNode].includes(toNode)) {
      let toIndex = graph.adjList[fromNode].indexOf(toNode);
      graph.adjList[fromNode].splice(toIndex, 1);
    }
  }
  removeOneWayEdge(fromNode, toNode, this);
  removeOneWayEdge(toNode, fromNode, this);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
    this.vertices.forEach(function(vertex) {
      cb(vertex);
    });
};

/*
 * Complexity: What is the time complexity of the above functions?
addNode = O(1)
contains = O(n)
removeNode = O(n)
hasEdge = O(n)
addEdge = O(n)
removeEdge = O(n)
forEachNode = O(n)
 */


