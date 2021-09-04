function myFunction() {
  var x = document.getElementById("sideNav");
  if (x.className === "navbar-links") {
    x.className += " responsive";
  } else {
    x.className = "navbar-links";
  }
} 