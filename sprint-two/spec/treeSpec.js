describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  // New Tests
  it('should detect values correctly in additional layers of nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    tree.children[1].children[0].addChild(1);
    tree.children[1].children[0].children[0].addChild(2);
    expect(tree.contains(2)).to.equal(true);
    expect(tree.contains(9)).to.equal(false);
  });

  it('adding children should also have their parent property reference correctly', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.addChild(7);
    expect(tree.children[0].parent).to.equal(tree);
    expect(tree.children[1].parent).to.equal(tree);
    expect(tree.children[2].parent).to.equal(tree);
    tree.children[0].addChild(8);
    tree.children[1].addChild(9);
    expect(tree.children[0].children[0].parent).to.equal(tree.children[0]);
    expect(tree.children[1].children[0].parent).to.equal(tree.children[1]);
  });

  it('should execute a callback on each node in the tree', function() {
    var allZeroTree = function(item) {
      item.value = 0;
    };
    tree.addChild(5);
    tree.addChild(6);
    tree.addChild(7);
    tree.children[0].addChild(8);
    tree.children[1].addChild(9);
    tree.traverse(allZeroTree);
    expect(tree.value).to.equal(0);
    expect(tree.children[0].value).to.equal(0);
    expect(tree.children[1].value).to.equal(0);
    expect(tree.children[2].value).to.equal(0);
    expect(tree.children[0].children[0].value).to.equal(0);
    expect(tree.children[1].children[0].value).to.equal(0);
  });
});
