/*Show more female characters
button on click, display more female div, hide button
*/
function more_female_btn() {
  var i;
  var characters = document.getElementsByClassName("more-female");
  var femalebtn = document.getElementById("more_female_btn");

  for (i = 0; i < characters.length; i++) {
    characters[i].style.display = "block";
  } 
  femalebtn.style.display = "none";
}
