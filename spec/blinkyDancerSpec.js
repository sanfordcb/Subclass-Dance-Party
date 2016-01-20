describe("blinkyDancer", function() {

  var blinkyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });
  
  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(blinkyDancer, "step");
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps); 

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });

    // blinkyDancer should be visible on every other step
    it("blinkyDancer should be visible on every other step", function() {
      sinon.spy(blinkyDancer.$node, "toggle");
      expect(blinkyDancer.$node.toggle.callCount).to.be.equal(0);
      
      // create a new var for time 0
      var time0 = blinkyDancer.$node.css("display");
      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.$node.toggle.callCount).to.be.equal(1);
      
      // create a new var for time 1
      var time1 = blinkyDancer.$node.css("display");
      clock.tick(timeBetweenSteps);
      
      expect(blinkyDancer.$node.toggle.callCount).to.be.equal(2);
      // create a new var for time 2
      var time2 = blinkyDancer.$node.css("display");
      
      // expect time0 === time2 and time0 !== time1
      expect(time0 === time2 && time0 !== time1).to.equal(true);
    });

  });
});
