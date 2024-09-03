const inputValue = document.getElementById("input");

document.querySelectorAll(".num").forEach(function (item) {
    item.addEventListener("click", function (e) {
        if (inputValue.innerText === "NaN" || inputValue.innerText === "0") {
            inputValue.innerText = "";
        }
        inputValue.innerText += e.target.innerHTML.trim();
    });
});

document.querySelectorAll(".operation").forEach(function (item) {
    item.addEventListener("click", function (e) {
        const operation = e.target.innerHTML.trim();
        let lastValue = inputValue.innerText.slice(-1);

        if (operation === "=") {
            if (!isNaN(lastValue)) {
                inputValue.innerText = eval(inputValue.innerText);
            }
        } else if (operation === "AC") {
            inputValue.innerText = "0";
        
        } else {
            if (!isNaN(lastValue) || lastValue === ")") {
                inputValue.innerText += operation;
            }
        }
    });
});