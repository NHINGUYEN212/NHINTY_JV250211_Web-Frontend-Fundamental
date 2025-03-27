document.getElementById("keyboard").addEventListener("click", function(event) {
    if (event.target.classList.contains("key")) {
        let output = document.getElementById("output");
        if (event.target.classList.contains("delete")) {
            output.value = output.value.slice(0, -1);
        } else {
            output.value += event.target.textContent;
        }
    }
});