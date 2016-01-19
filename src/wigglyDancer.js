var WigglyDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.setClass('wiggly-dancer');
  this.setColor('yellow');
};

WigglyDancer.prototype = Object.create(Dancer.prototype);
WigglyDancer.prototype.constructor = WigglyDancer;

WigglyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
