
let clicked = 0;
const nav = document.querySelector('.navbar-links');


function myFunction() {

  var y = document.getElementById("mobileIcon");

  if (clicked === 0)
  {
    nav.className = "navbar-active navbar-smooth";
    nav.className += " responsive";
    ++clicked;
    console.log(clicked);
  }
  else
  {
    nav.className = "navbar-links navbar-smooth";
    nav.className += " responsive";
    --clicked;
    console.log(clicked);
  }
  
    /*
    nav.classList.toggle('navbar-inactive');
    
  /* toggles icon to an x*/
  y.classList.toggle("toggle");
}

