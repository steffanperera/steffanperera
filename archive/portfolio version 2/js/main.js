//cursor
let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".collapsible,.nav-links a");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}
