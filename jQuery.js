const nav_links = document.getElementsByClassName("nav-link");

var clickHandler =  () => {
  /*
  var element = document.getElementById("survey");
  var body = document.getElementById("contact-information");
  if (element.style.display === "none") {
    element.style.display = "block";
    body.style.display = "none";
  } else {
    element.style.display = "none";
    body.style.display = "block";
  }
  */
  this.style.color = "white";
}

nav_links.array.forEach(element => {
  element.addEventListener('click', clickHandler);
});
