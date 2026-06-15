let btn = document.querySelector(".result");

btn.addEventListener("click", () => {
    let num1 = Number(document.querySelector("#num1").value);
    let num2 = Number(document.querySelector("#num2").value);
    let operation = document.querySelector("#sel").value;
    let output = document.querySelector(".main:last-child input");

    let result;

    if (operation === "add") {
        result = num1 + num2;
    } 
    else if (operation === "substract") {
        result = num1 - num2;
    } 
    else if (operation === "multiply") {
        result = num1 * num2;
    } 
    else if (operation === "division") {
        if (num2 === 0) {
            output.value = "Error";
            return;
        }
        result = num1 / num2;
    } 
    else {
        alert("Please select an operation");
        return;
    }

    output.value = result;
});