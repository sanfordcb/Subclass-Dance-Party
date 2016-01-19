var ExpanderDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.setClass('expander-dancer');
  this.setColor('blue');
};

ExpanderDancer.prototype = Object.create(Dancer.prototype);
ExpanderDancer.prototype.constructor = ExpanderDancer;

ExpanderDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};