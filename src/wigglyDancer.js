var WigglyDancer = function (top, left, timeBetweenSteps, isBlinkyNeighbor) {
  Dancer.call(this, top, left, timeBetweenSteps, isBlinkyNeighbor);
  this.setClass('wiggly-dancer');
  this.setColor('yellow');  
  this.top = top;
  this.setDance(wiggle.bind(this));
  
  function wiggle () {
    if(this.isBlinkyNeighbor) {
      this.blink();
    }
    this.$node.animate({
      'top': this.top + 10
    });
    this.$node.animate({
      'top': this.top - 10
    });
  }
};

WigglyDancer.prototype = Object.create(Dancer.prototype);
WigglyDancer.prototype.constructor = WigglyDancer;
