var ExpanderDancer = function (top, left, timeBetweenSteps, isBlinkyNeighbor) {
  Dancer.call(this, top, left, timeBetweenSteps, isBlinkyNeighbor);
  this.setClass('expander-dancer');
  this.setColor('blue');
  this.setSize('5px', '5px');
  this.width = Number(this.$node[0].style.width.slice(0, this.$node[0].style.width.length - 2));
  this.height = Number(this.$node[0].style.height.slice(0, this.$node[0].style.height.length - 2));
  this.setDance(expand.bind(this));
  
  function expand() {
    if(this.isBlinkyNeighbor) {
      this.blink();
    }
    this.$node.animate({
      'width': this.width * 2 + 'px',
      'height': this.height * 2 + 'px'
    });
    this.$node.animate({
      'width': this.width + 'px',
      'height': this.height + 'px'
    }); 
  }
};

ExpanderDancer.prototype = Object.create(Dancer.prototype);
ExpanderDancer.prototype.constructor = ExpanderDancer;

