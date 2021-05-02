/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction(event) {
  event.stopPropagation();
  document.getElementById("myDropdown").classList.toggle("show");
}



// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  document.getElementById("myDropdown").classList.remove("show");
  document.getElementById("myDropdown2").classList.remove("show");
}