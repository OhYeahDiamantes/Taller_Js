function checkType() {
    const inputValue = document.getElementById("inputValue").value;
    const resultElement = document.getElementById("result");

    if (!isNaN(inputValue)) {
        if (inputValue.includes(".") || inputValue.includes(",")) {
            resultElement.innerText = "Texto";
        } else {
            resultElement.innerText = "Número";
        }
    } else {
        resultElement.innerText = "Texto";
    }
}