/*=============================================================
	Button functions
=============================================================*/
/*Discord Modal Functions ====================================*/

/*Show Discord Modal
button on click, display discord_modal_container block */
function show_discord_modal () {
	var modal = document.getElementById("discord_modal_container");
	modal.style.display = "flex";
}

/*Close Discord Modal
button on click, display discord_modal_container none */
function close_discord_modal () {
	var modal = document.getElementById("discord_modal_container");
	modal.style.display = "none";
}

/*Copy Discord Username to Clipboard
button on cancelIdleCallback, copy text to clipboard */
function copy_discord_name () {
	navigator.clipboard.writeText("heyKPerks#4655");
	alert("copied to clipboard: " + "heyKPerks#4655");
}


/*Main Nav Section ================================================*/
/*	on click, show selected tab, hide all actionable tabs */
function tab_selct (nav_id, tab_id) {
	console.log(nav_id);
	console.log(tab_id);
	
	var i;
	var selected_nav = document.getElementById(nav_id);
	console.log("selected nav");
	console.log(selected_nav);
	var current_nav_id = document.getElementsByClassName('nav-item-selected')[0].id;
	var current_nav = document.getElementById(current_nav_id);
	console.log("current nav");
	console.log(current_nav);
	var selected_tab = document.getElementById(tab_id);
	var actionable_tabs = document.getElementsByClassName("tab-actionable");
	
	current_nav.classList.remove("nav-item-selected");
	selected_nav.classList.add("nav-item-selected");
	
	console.log("the selected tab is " + selected_tab);
	for (i = 0; i < actionable_tabs.length; i++) {
		console.log("actionable tab on button select " + actionable_tabs[i]);
	}

	for (i = 0; i < actionable_tabs.length; i++) {
		actionable_tabs[i].style.display = "none";
	}
	
	selected_tab.style.display = "block";
}

/*Main Section ================================================*/

/*Show more anime series by genre
button on click, display more_cards_genre, set fav_item_animeseries bottom margin 10px to match grid, hide button
*/
function more_bygenre_btn() {
  var container = document.getElementById("more_cards_genre");
  var animeSeriesContainer = document.getElementById("fav_item_animeseries");
  var button = document.getElementById("more_bygenre_btn"); 
  
  container.style.display = "flex";
  animeSeriesContainer.style.marginBottom = "10px";
  button.style.display = "none";
}

/*Show more female characters
button on click, display more female div, hide button
*/
function more_female_btn() {
  var container = document.getElementById("more_cards_female");
  var animeSeriesContainer = document.getElementById("fav_item_female_chars");
  var button = document.getElementById("more_female_btn"); 
  
  container.style.display = "flex";
  animeSeriesContainer.style.marginBottom = "10px";
  button.style.display = "none";
}

/*Show more OPs
button on click, display more-video-item-op, hide more_video_items_op_btn
*/
function more_OP_ED_item_op_btn() {
  var i;
  var links = document.getElementsByClassName("more-OP_ED-item-op");
  var btn = document.getElementById("more_OP_ED_item_op_btn");
  for (i = 0; i < links.length; i++) {
    links[i].style.display = "block";
  }
  btn.style.display = "none";
}
/*Show more EDs*/
function more_OP_ED_item_ed_btn() {
  var i;
  var links = document.getElementsByClassName("more-OP_ED-item-ed");
  var btn = document.getElementById("more_OP_ED_item_ed_btn");
  for (i = 0; i < links.length; i++) {
    links[i].style.display = "block";
  }
  btn.style.display = "none";
}

/*Links and Follows Section ===================================*/

/*Show more anitube links
button on click, display more-lf-anitube, hide more_anitube_btn
*/
function more_anitube_btn() {
  var i;
  var links = document.getElementsByClassName("more-lf-anitube");
  var btn = document.getElementById("more_anitube_btn");
  for (i = 0; i < links.length; i++) {
    links[i].style.display = "block";
  }
  btn.style.display = "none";
}

/*Show more anipicsreddit links 
button on click, display more-lf-anipicsreddit, hide more_anipicsreddit_btn
*/
function more_anipicsreddit_btn() {
  var i;
  var links = document.getElementsByClassName("more-lf-anipicsreddit");
  var btn = document.getElementById("more_anipicsreddit_btn");
  for (i = 0; i < links.length; i++) {
    links[i].style.display = "block";
  }
  btn.style.display = "none";
}

/*Show more anipicstwitter links 
button on click, display more-lf-anipicstwitter, hide more_anipictwitter_btn
*/
function more_anipicstwitter_btn() {
  var i;
  var links = document.getElementsByClassName("more-lf-anipicstwitter");
  var btn = document.getElementById("more_anipicstwitter_btn");
  for (i = 0; i < links.length; i++) {
    links[i].style.display = "block";
  }
  btn.style.display = "none";
}
/*=============================================================
	Content continuity with screen resizing
=============================================================*/

/* Layout changes with screen resizing ======================= */

/* Small Mobile Single column */
function one_column () {
	console.log("column one start");
	/*	Makes sure all tabs are in the list of actionable tabs
			There are cases where tabs are taken out of list of actionable tabs
			on other screen sizes and not put back on screen resize to one column. 
	*/
	var i; 
	var x = document.getElementsByClassName("tab");
	for (i = 0; i < x.length; i++) {
		x[i].classList.add("tab-actionable");
	}

	/* Hiding about tab on screen resize from larger to small one column layout
		There is a case where on screen resize to smaller layout, about tab remains wrongly displayed.
		I couldn't directly hide about tab on small layout, it caused problems for when wanting to select about tab.
		Solution was to test if another tab was selected before screen shrink (which should be always by design), 
		then hide about.
	*/
	var current_nav_id = document.getElementsByClassName('nav-item-selected')[0].id;
	var tab_about = document.getElementById("tab_about");
	console.log(current_nav_id);
	if (!current_nav_id.includes("about")){
		tab_about.style.display = "none";
	}	
}

/* Medium Tablet Two column */
function two_column () {
	/*	Makes sure about tab is displayed on 2 column resize and not hidden when tab_select runs
			There is a case where selecting a tab, then resizing to medium screen hides about,
			and does not show back on screen resize to 2 column.
	*/
	var tab_about = document.getElementById("tab_about");	
	tab_about.classList.remove("tab-actionable");
	tab_about.style.display = "block";
	
	/*	Makes sure tab_linksandfollows gets put back in to list of actionable tabs 
			There is a case where going from large 3 column back to medium 2 column
			keeps tab_linksandfollows wrongly out of the list of actionable tabs designed 
			for medium 2 column layout. 
	*/
	var tab_linksandfollows = document.getElementById("tab_linksandfollows");
	tab_linksandfollows.classList.add("tab-actionable");

	/*	Case where expanding from small one column layout to medium two column layout
			if tab about was currently selected, then display and change to selected watching tab
			to prevent no content displayed on screen resize. 
	*/
	var current_nav_id = document.getElementsByClassName('nav-item-selected')[0].id;
	console.log(current_nav_id);
	if (current_nav_id.includes("about")){
		tab_selct('nav_watching', 'tab_watching');
	}

	/*	Hide links and follows tab on screen resize from large to medium 
			Case where linksandfollows wrongly stays displayed when screen shrinks. 
			I couldn't directly hide on medium layout, it caused issues when wanting to select linksandfollows.
	*/
	var tab_linksandfollows = document.getElementById("tab_linksandfollows");
	console.log(current_nav_id);
	if (!current_nav_id.includes("links")){
		tab_linksandfollows.style.display = "none";
	}	
}

/* Large Desktop Three column */
function three_column () {
	/*	Makes sure about tab is displayed on 3 column resize and not hidden when tab_select runs
			There is a case where selecting a tab, then resizing to large screen hides about,
			and does not show back on screen resize to 3 column.
	*/
	var tab_about = document.getElementById("tab_about");	
	tab_about.classList.remove("tab-actionable");
	tab_about.style.display = "block";

	/*	Makes sure linksandfollows tab is displayed on 3 column resize and not hidden when tab_select runs
			There is a case where selecting a tab, then resizing to large screen hides linksandfollows,
			and does not show back on screen resize to 3 column.
	*/
	var tab_linksandfollows = document.getElementById("tab_linksandfollows");
	tab_linksandfollows.classList.remove("tab-actionable");
	tab_linksandfollows.style.display = "block";
	
	/*	Case where Linksandfollows tab was selected in medium 2 column layout
			then when expanded to larger three column layout leaving nothing displayed 
	*/
	var current_nav_id = document.getElementsByClassName('nav-item-selected')[0].id;
	console.log(current_nav_id);
	if (current_nav_id.includes("links")){
		tab_selct('nav_watching', 'tab_watching');
	}
}

//Maintains selected tab content continuity with responsive design
function tab_continuity () {
	// Get width of the window, used innerWidth to match with CSS grids calculations
	var w = window.innerWidth;
	console.log("window width is " + w);

	/*scaling profile banner image by height or width,
		depending on screen size 
	*/
	if (w < 965) {
		var banner = document.getElementById("profile_banner");
		banner.style.height = "100%";
		banner.style.width = "";
	}
	if ( w > 965) {
		var banner = document.getElementById("profile_banner");
		banner.style.width = "100%";
		banner.style.height = "";
	}

	if (w < 900) {
		console.log("calling column one");
		one_column();
	}
	if (w > 900 && w < 1299) {
		console.log("calling column two");
		two_column();
	}
	if (w > 1300) {
		console.log("calling column three");
		three_column();
	}
}

// Attaching the event listener function to window's resize event

window.addEventListener("resize", tab_continuity);

/*	Calling the function for the first time after page loads
		had to call function after page load because otherwise failed finding divs by ID
		and returned null for elements
*/
window.onload = function afterWebPageLoad() { 
  tab_continuity();
} 

// testing matchMedia ========================================================
/*
function tab_continuity() {
	var size_small = window.matchMedia('(min-width:300px) and (max-width: 899px)');
	var size_medium = window.matchMedia('(min-width: 900px)');
	var size_large = window.matchMedia('(min-width: 1300px)');

	var banner = document.getElementById("profile_banner");

  // Check if the media query is true
	if (size_small.matches) {
		console.log("matchMedia function calling column one");
		one_column();

		banner.style.height = "100%";
		banner.style.width = "";
  }
	if (size_medium.matches) {
		console.log("matchMedia function calling column two");
		two_column();

		banner.style.width = "100%";
		banner.style.height = "";
  }
	if (size_large.matches) {
		console.log("matchMedia function calling column three");
		three_column();
		
		banner.style.width = "100%";
		banner.style.height = "";
  }
}

// Register event listener
window.addEventListener("resize", tab_continuity);
// Initial check
tab_continuity();
*/
