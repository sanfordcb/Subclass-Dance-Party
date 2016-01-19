describe('wigglyDancer', function() {
  var wigglyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    wigglyDancer = new wigglyDancer(10, 20, timeBetweenSteps);
  });
  
  it('check if wigglyDancer has a node with class \'wiggly-dancer\'', function() {
    expect(wigglyDancer.$node.hasClass('wiggly-dancer')).to.be.true;
  });
  
  it('should have a step function that toggles position', function() {
    sinon.spy(wigglyDancer.$node, 'toggle');
    wigglyDancer.step();
    expect(wigglyDancer.$node.toggle.called).to.be.equal(true);
  });
  
  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(wigglyDancer, 'step');
      expect(wigglyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);
      expect(wigglyDancer.step.callCount).to.be.equal(1);
      
      clock.tick(timeBetweenSteps);
      expect(wigglyDancer.step.callCount).to.be.equal(2);
    });
  })
});