const container = document.getElementById("container");
const squares = document.querySelectorAll(".square");

squares.forEach(square => {
    square.addEventListener("mouseover", function() {
        container.style.backgroundColor = window.getComputedStyle(this).backgroundColor;
    });
    square.addEventListener("mouseout", function() {
        container.style.backgroundColor = "green";
    });
});