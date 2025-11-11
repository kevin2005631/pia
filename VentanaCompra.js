
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  const popup = document.getElementById("popup");
  const cerrarPopup = document.getElementById("cerrarPopup");


  form.addEventListener("submit", function(e) {
    e.preventDefault(); 
    popup.style.display = "block"; 
  });


  cerrarPopup.addEventListener("click", function() {
    popup.style.display = "none"; 
    form.reset();
  });
});
