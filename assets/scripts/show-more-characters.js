/*Main Section ================================================*/

/*Show more anime series by genre
button on click, display scrolling_genre_cards, set fav_item_animeseries bottom margin 10px to match grid, hide button
*/
function more_bygenre_btn() {
  var container = document.getElementById("scrolling_genre_cards");
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
  var i;
  var characters = document.getElementsByClassName("more-female");
  var container = document.getElementById("more_characters_fm");
  var femalebtn = document.getElementById("more_female_btn");
  
  for (i = 0; i < characters.length; i++) {
    characters[i].style.display = "block";
  } 
  container.style.marginTop = "10px";
  femalebtn.style.display = "none";
}

/*Show more OPs
button on click, display more-video-item-op, hide more_video_items_op_btn
*/
function more_video_items_op_btn() {
  var i;
  var links = document.getElementsByClassName("more-video-item-op");
  var btn = document.getElementById("more_video_items_op_btn");
  for (i = 0; i < links.length; i++) {
    links[i].style.display = "block";
  }
  btn.style.display = "none";
}
/*Show more EDs*/
function more_video_items_ed_btn() {
  var i;
  var links = document.getElementsByClassName("more-video-item-ed");
  var btn = document.getElementById("more_video_items_ed_btn");
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