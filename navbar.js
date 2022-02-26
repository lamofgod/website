
let clicked = 0;
const nav = document.querySelector(".navbar-links");


function myFunction() {

  var y = document.getElementById("mobileIcon");

  if (clicked === 0)
  {
    nav.className = "navbar-active";
    nav.className += " responsive";
    ++clicked;
  }
  else
  {
    /*nav.className = "navbar-inactive";
    nav.className += " responsive";*/
    --clicked;
    nav.className = "navbar-links";
  }
  

  /* toggles icon to an x*/
  y.classList.toggle("toggle");
}

