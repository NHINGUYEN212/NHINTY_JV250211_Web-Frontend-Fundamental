let openModalBtn = document.getElementById("openModal");
let modal = document.getElementById("myModal");
let closeModal = document.querySelector(".close");

openModalBtn.addEventListener("click", function() {
    modal.style.display = "block";
})
closeModal.addEventListener("click", function() {
    modal.style.display = "none";
})
modal.addEventListener("click", function(event) {
    if (event.target === modal) { 
        modal.style.display = "none"; 
    }
});
