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
