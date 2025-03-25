const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

        buttons.forEach(button => {
            button.addEventListener("click", function() {
                const value = button.textContent;

                if (value === "=") {
                    calculateResult();
                } else if (value === "C") {
                    clearDisplay();
                } else {
                    appendToDisplay(value);
                }
            });
        });

        function appendToDisplay(value) {
            display.value += value;
        }

        function clearDisplay() {
            display.value = "";
        }

        function calculateResult() {
            try {
                let expression = display.value;

                expression = expression.replace(/x/g, "*").replace(/÷/g, "/");

                if (expression.includes("/0")) {
                    display.value = "Lỗi: Không thể chia cho 0!";
                    return;
                }
                display.value = eval(expression);
            } catch (error) {
                display.value = "Lỗi: Biểu thức không hợp lệ!";
            }
        }