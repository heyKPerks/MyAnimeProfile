//template for catching screensize ==============================
function red() {
  $('div').css('background','#B60C0C')
  .text('Screen Size RED');
}

function orange() {
  $('div').css('background','#EBAE10')
  .text('Screen Size ORANGE');
}

function green() {
  $('div').css('background','#83ba2b')
  .text('Screen Size GREEN');
}

var bounds = [
  {min:0,max:500,func:red},
  {min:501,max:850,func:orange},
  {min:851,func:green}
];

var resizeFn = function(){
  var lastBoundry; // cache the last boundry used
  return function(){
      var width = window.innerWidth;
      var boundry, min, max;
      for(var i=0; i<bounds.length; i++){
          boundry = bounds[i];
          min = boundry.min || Number.MIN_VALUE;
          max = boundry.max || Number.MAX_VALUE;
          if(width > min && width < max 
             && lastBoundry !== boundry){
              lastBoundry = boundry;
              return boundry.func.call(boundry);            
          }
      }
  }
};
$(window).resize(resizeFn());
$(document).ready(function(){
  $(window).trigger('resize');
});

//controlling available nav items  ==============================

//smallest screen size, set nav-item about selected, set all nav-items available

//middle screen size, set nav-item spotlight selected, make about nav-item unavailable

//larges screen size, set nav-item spotlight selected, make about and links nav-items unavailable 
