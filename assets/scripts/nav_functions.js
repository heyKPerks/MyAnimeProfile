/*template for catching screensize ==============================
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
*/

/*sudo code   ==============================
on page load spotlight active
screensize = get screen size

1 column <900px
if (screensize < 900px) {
	set all tabs available
}

2 collumn 900px
if (screensize >= 900px) {
	//check active tab 
	if (active tab = about) {
		set spotlight active
	}

	set all tabs available 
	set about tab unavailabl

	show about section
	only available tabs should be spotlight, favorites, Links & follows 
	pressing active tab button should only cycle trhough availble tabs, spotlight favorites, linkandfollows	
}

3 collumn 1300px
if (screensize >= 1300px){
	//check active tab 
	if (active tab = linksandfollows) {
		set spotlight active
	}
	
	set all tabs available 
	set about and linksandfollows unavailabl


	show linksandfollows section
	only available tabs should be spotlight, favorites
	pressing active tab button should only cycle trhough availble tabs spotlight, favorites
}

*/

//tabs continuity on screen size  ==============================
/*classes:
nav-item (nav buttons), nav-item-active, nav-item-inactive, nav-item-selected
tab (tab sections), tab-active, tab-inactive, tab-selected
*/

/*
one collumn, smallest screen width 
set all nav items active
*/
function one_collumn() {
  console.log("function one_collum start");

	var i, j, navItems, tabs;
  navItems = document.getElementsByClassName("nav-item-inactive");

  console.log("number of nav items inactive " + navItems.length);

	for (i = 0; i < navItems.length; i++) {
    navItems[i].className.replace("nav-item-inactive", "nav-item-active");
    console.log(navItems[i] + " active");
	}	

  console.log("number of tab items inactive " + navItems.length);

  for (j = 0; j < navItems.length; j++) {
    navItems[j].className.replace("tab-inactive", "tab-active");
    console.log(tabs[j] + " active");
	}	

  console.log("function one_collum end");
}

/*
two collumn, medium screen width 
set about nav
*/
function two_collumn() {

}
function three_collumn() {

}

var bounds = [
  {min:0,max:899,func:one_collumn},
  {min:900,max:1299,func:two_collumn},
  {min:1300,func:three_collumn}
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