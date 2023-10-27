document.addEventListener('DOMContentLoaded', function () {
    const numberInput = document.getElementById('numberInput');
    const checkButton = document.getElementById('checkButton');
    const result = document.getElementById('result');

    checkButton.addEventListener('click', function () {
        const number = parseInt(numberInput.value);

        if (isNaN(number) || number !== Math.floor(number) || number < 0) {
            result.textContent = "¿No lees o qué? ¡Dice positivos! >:(";
        } else if (number % 2 === 0) {
            result.textContent = "Es par";
        } else {
            result.textContent = "Es impar";
        }
    });
});
