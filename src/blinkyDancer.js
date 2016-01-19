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

/*BlinkyDancer.prototype.step = function(callback){
  Dancer.prototype.step.call(this, callback);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};*/
