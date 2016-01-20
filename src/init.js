$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var top = ($("body").height() - 10) * Math.random();
    var left = ($("body").width() - 10) * Math.random();
    var isBlinkyNeighbor = false;

    if(window.dancers.length) {
      isBlinkyNeighbor = window.dancers.reduce(function(accumulator, dancer) {
        if(dancer instanceof BlinkyDancer) {
          var dancerTop = parseInt(dancer.$node.css('top'));
          var dancerLeft = parseInt(dancer.$node.css('left'));
          var distance = Math.sqrt((top - dancerTop)^2 + (left - dancerLeft)^2);
          return accumulator || distance < 5;
        } else {
          return accumulator || false;
      }
      }, false);
    }
    var dancer = new dancerMakerFunction(top, left, Math.random() * 1000, isBlinkyNeighbor);

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
      
  });

  $('#lineUp').on('click', function() {
    dancers.forEach(function(dancer) {
      dancer.$node.css('left', '10px');
    });
  }); 
  var positions = [];
});
