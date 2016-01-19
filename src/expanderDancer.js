var ExpanderDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $("<span class="wiggly-dancer"></span>");
};

ExpanderDancer.prototype = Object.create(Dancer.prototype);
ExpanderDancer.prototype.constructor = ExpanderDancer;

ExpanderDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};