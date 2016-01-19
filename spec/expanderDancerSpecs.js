describe('expanderDancer', function() {
  var expanderDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    expanderDancer = new expanderDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object and node should have class expander-dancer', function() {
    // find expanderDancer node property
    // expecting node to have class expander-dancer
    expect(expanderDancer.$node.hasClass('expander-dancer')).to.equal(true);
  });
  
  it('should have a step function that makes its node expand and contract', function() {
    sinon.spy(expanderDancer.$node, 'toggle');
    expanderDancer.step();
    expect(expanderDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(expanderDancer, 'step');
      expect(expanderDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);

      expect(expanderDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);

      expect(expanderDancer.step.callCount).to.be.equal(2);
    });
  });

}); 

  