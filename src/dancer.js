// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps, isBlinkyNeighbor){

  // Use jQuery to create and style a generic dancer <span>.
  this.$node = $('<span class="dancer"></span>');
  this.setColor('white');
  this.setSize();
  this.setPosition(top, left);
  this.isBlinkyNeighbor = isBlinkyNeighbor;
  
  //Make the Dancer dance
  this.setDance();
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.$node.mouseover(this.stop.bind(this));
};
/*
  STYLING 
*/
Dancer.prototype.setColor = function(color) {
  this.$node.css({'border': '10px solid ' + color, 'border-radius': '50%', 'background-color': color});
};

Dancer.prototype.setSize = function(height, width) {
  height = height || '0px';
  width = width || '0px';
  this.$node.css({'height': height, 'width': width});
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

/*
  DANCE MOVES and STEPPING
*/
Dancer.prototype.setDance = function(callback) {
  this.dance = callback || this.$node.toggle;
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  this.dance.call(this.$node);
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.stop = function() {
  var oldDance = this.dance;
  this.setDance(function() {});
  return oldDance; 
}

/*
  SUBCLASS FUNCTIONS
*/
Dancer.prototype.setClass = function(className) {
  this.$node.addClass(className);
};

Dancer.prototype.blink = function() {
    this.$node.toggle();
};

