var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.setClass('blinky-dancer');

  this.setDance(blink.bind(this));

  function blink () {
    this.$node.toggle();
  }
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
