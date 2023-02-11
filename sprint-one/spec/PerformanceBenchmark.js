window.variant = document.location.search.slice(1);

define([
  'spec/verifyClass.js',
  '../lib/chai/chai.js',
  '../lib/mocha/mocha.js',
  'src/' + variant + '/stack.js',
  'src/' + variant + '/queue.js',
  '../lib/jquery/jquery.js'
], function(verifyClass, chai) {

  $(function() {
    $('<h4>The ' + variant + ' pattern</h4>').css({margin: 0}).prependTo(document.body);
  });

  mocha.setup('bdd');
  var expect = chai.expect;

  describe('stack', function() {

    var stack;
    var instantiator = Stack;
    var prototypeOfInstances = variant === 'prototypal' && stackMethods;

    beforeEach(function() {
      if (variant === 'pseudoclassical' || variant === 'es6') {
        stack = new instantiator();
      } else {
        stack = instantiator();
      }
    });

    describe('Benchmark Test', function() {
      it('Load test', function() {

        let variantOptions = ['functional', 'functional-shared', 'prototypal', 'pseudoclassical', 'es6']

        // toggle the array index to check the memory load of the instantiation of a large number of stacks
        if (variant === variantOptions[4]) {
          let bigStack = [];
          let invokeCount = 1000000;

          for (let i = 0; i < invokeCount; i++) {
            if (variant === 'pseudoclassical' || variant === 'es6') {
              bigStack[i] = new instantiator();
            } else {
              bigStack[i] = instantiator();
            }
          }
        }

      });
    });
  });

  describe('queue', function() {
    var queue;
    var instantiator = Queue;
    var prototypeOfInstances = variant === 'prototypal' && queueMethods;

    beforeEach(function() {
      if (variant === 'pseudoclassical' || variant === 'es6') {
        queue = new instantiator();
      } else {
        queue = instantiator();
      }
    });

    describe('Benchmark Test', function() {
      it('Load test', function() {
        expect(queue.size()).to.equal(0);
      });
    });
  });

  window.mochaPhantomJS ? mochaPhantomJS.run() : mocha.run();
});
