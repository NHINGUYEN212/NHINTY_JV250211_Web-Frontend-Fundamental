let text = document.getElementById("text");
let buttonHide = document.getElementById("btn-hide");
let buttonShow = document.getElementById("btn-show");

buttonHide.addEventListener("click", function(event) {
    text.style.display = "none";
});
buttonShow.addEventListener("click", function(event) {
    text.style.display = "block";
});