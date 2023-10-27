document.addEventListener("DOMContentLoaded", function () {
    const inputText = document.getElementById("inputText");
    const countButton = document.getElementById("countButton");
    const charCount = document.getElementById("charCount");

    countButton.addEventListener("click", function () {
        const text = inputText.value;
        const characterCount = text.length;
        charCount.textContent = `La cantidad de caracteres es: ${characterCount}`;
    });
});