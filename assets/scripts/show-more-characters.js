/*Show more anime series by genre
button on click, display scrolling_genre_cards, hide button
*/
function more_bygenre_btn() {
  var container = document.getElementById("scrolling_genre_cards");
  var button = document.getElementById("more_bygenre_btn"); 
  
  container.style.display = "flex";
  /*container.style.marginTop = "1rem";*/
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