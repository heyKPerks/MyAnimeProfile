/*W3 tabs example functinos 
function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " w3-red";
}*/

/*
<div class="page-item tab-container">
	<button class="tab" onclick="select_tab(event, 'tab-spotlight')">Spotlight</button>
	<button class="tab" onclick="select_tab(event, 'tab-favorite')">Favorites</button>
	<button class="tab" onclick="select_tab(event, 'tab-links')">Links and Follows</button>
</div><!--tab-container-->*/

function select_tab (evt, tabname) {
	console.log("function start");
	console.log("tabname = " + tabname);
	console.log("init variables");

	var i, x, y, tablinks;

	x = document.getElementsByClassName("tab-item");
	
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}	
	
	console.log("hide all tab-items");
	
/*	tablinks = document.getElementsByClassName("tablink");
	for (i = 0; i < x.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active-tab", "");
	}*/
	console.log("init y");
	y = document.getElementsByClassName(tabname);
	console.log("tab name = " + tabname);
	for (i = 0; i < y.length; i++) {
		if(tabname.localeCompare("tab_links") == true) {
			y[i].style.display = "grid";
		}
		else {
			y[i].style.display = "block";
		}
		console.log("show all tab-items");
	}	
		
	/*evt.currentTarget.className += " active-tab";*/
}