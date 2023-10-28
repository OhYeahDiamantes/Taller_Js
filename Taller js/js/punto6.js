document.getElementById('searchButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const searchText = document.getElementById('searchText').value;
    const outputText = document.getElementById('outputText');
    if (!inputText.trim()) {
        outputText.innerHTML = 'Por favor, ingresa un párrafo.';
        return;
    }
    const regex = new RegExp(searchText, 'gi');
    const result = inputText.replace(regex, match => `<span class="highlight">${match}</span>`);
    outputText.innerHTML = result;
});
