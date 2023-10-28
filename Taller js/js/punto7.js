document.addEventListener("DOMContentLoaded", function() {
    const checkButton = document.getElementById("checkButton");
    const result = document.getElementById("result");
    checkButton.addEventListener("click", function() {
        const numberA = parseFloat(document.getElementById("numberA").value);
        const numberB = parseFloat(document.getElementById("numberB").value);
        result.innerHTML = "";
        if (isNaN(numberA) || isNaN(numberB) || !Number.isInteger(numberA) || !Number.isInteger(numberB) || numberA <= 0 || numberB <= 0) {
            result.innerHTML = "A este paso voy a tener que darte clases de lectura. Ingresa un número >:(";
        } else if (numberA % numberB === 0) {
            result.innerHTML = `El número ${numberA} es divisible entre el número ${numberB}`;
        } else {
            result.innerHTML = `El número ${numberA} no es divisible entre el número ${numberB}`;
        }
    });
});
