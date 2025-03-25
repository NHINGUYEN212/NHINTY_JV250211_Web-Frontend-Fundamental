let button = document.getElementById("toggle-btn");

button.addEventListener("click", function() {
    document.querySelector(".container").classList.toggle("light-mode");
})