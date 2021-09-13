let firstClick = true;

function myFunction() {
  var x = document.getElementById("sideNav");
  var y = document.getElementById("mobileIcon");

  if (x.className === "navbar-links" || firstClick) {
    x.className += " responsive";
    firstClick = false;
    
  } else {
    x.className = "navbar-links";
  }

  y.classList.toggle("toggle");
} 